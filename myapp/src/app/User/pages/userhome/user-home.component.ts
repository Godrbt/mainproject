import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';

interface feedbackINT{
  feedback_details:any
  user_name:any
  user_photo:any
  user_contact:any
}

interface verificationFetch {
  volunteer_contact: any,
  volunteer_photo: any,
  volunteer_name: any,
  volunteer_email: any,
  volunteer_id: any,

}

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  currentIndex = 0;
  ufeedbackdata : feedbackINT [] = [];
  verificationdata: verificationFetch[] = [];

  userCount: number | undefined;
  volCount: number | undefined;
  InfoCount: number | undefined;

  ngOnInit() {
    
    this.testimonialfetch();
    this.Volcount();
    this.Usercount();
    this.Infocount();
    this.verificationdetails();
    
  }
  testimonialfetch() {


    axios.get(`http://localhost:5000/testimonial/`,).then((response) => {
      this.ufeedbackdata = response.data.userFeedback
      console.log(response.data.userFeedback);
      
    })
  }
  

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.ufeedbackdata.length) % this.ufeedbackdata.length;
    this.updateTransform();
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.ufeedbackdata.length;
    this.updateTransform();
  }

  private updateTransform(): void {
    const testimonialsContainer = document.querySelector('.testimonials-container') as HTMLElement;
    const translateX = -this.currentIndex * 100; // Assuming each testimonial card has 100% width
    testimonialsContainer.style.transform = `translateX(${translateX}%)`;
  }
    
    
  verificationdetails() {



    axios.get(`http://localhost:5000/volverification`).then((response) => {
    
      this.verificationdata = response.data.verificationdata;



    })
  }






  Usercount() {
    axios.get(`http://localhost:5000/usercount`).then((response) => {
      this.userCount = response?.data?.count?.[0]?.userCount;
    });
  }

  Volcount() {
    axios.get(`http://localhost:5000/volcount`).then((response) => {
      this.volCount = response?.data?.count?.[0]?.volCount;
    });
  }

  Infocount() {
    axios.get(`http://localhost:5000/Infocount`).then((response) => {
      this.InfoCount = response?.data?.count?.[0]?.InfoCount;
    });
  }
}
