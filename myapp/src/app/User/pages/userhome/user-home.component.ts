import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';

interface feedbackINT{
  feedback_details:any
  user_name:any
  user_photo:any
  user_contact:any
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

  ngOnInit() {
    
    this.testimonialfetch();
    
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
}
