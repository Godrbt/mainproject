import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';

interface vfeedbackINT{
  vfeedback_details:any
  volunteer_name:any
  volunteer_photo:any
  volunteer_contact:any
}

@Component({
  selector: 'app-volunteerhome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './volunteerhome.component.html',
  styleUrl: './volunteerhome.component.css'
})
export class VolunteerhomeComponent {
  
  userCount: number | undefined;
  volCount: number | undefined;
  InfoCount: number | undefined;

  currentIndex = 0;
  vfeedbackdata : vfeedbackINT [] = [];

  ngOnInit() {
    
    this.vtestimonialfetch();
    this.Volcount();
    this.Usercount();
    this.Infocount();
  }
  vtestimonialfetch() {


    axios.get(`http://localhost:5000/vtestimonial/`,).then((response) => {
      this.vfeedbackdata = response.data.volFeedback
      console.log(response.data.volFeedback);
      
    })
  }
  

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.vfeedbackdata.length) % this.vfeedbackdata.length;
    this.updateTransform();
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.vfeedbackdata.length;
    this.updateTransform();
  }

  private updateTransform(): void {
    const testimonialsContainer = document.querySelector('.testimonials-container') as HTMLElement;
    const translateX = -this.currentIndex * 100; // Assuming each testimonial card has 100% width
    testimonialsContainer.style.transform = `translateX(${translateX}%)`;
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
