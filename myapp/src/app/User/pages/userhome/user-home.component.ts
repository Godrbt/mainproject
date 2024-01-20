import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  currentIndex = 0;

  testimonials = [
    { id: 1, name: 'John Doe', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Jane Smith', quote: 'Vivamus consectetuer hendrerit lacus. Fusce suscipit libero eget elit.' },
    // Add more testimonials as needed
  ];

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateTransform();
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateTransform();
  }

  private updateTransform(): void {
    const testimonialsContainer = document.querySelector('.testimonials-container') as HTMLElement;
    const translateX = -this.currentIndex * 100; // Assuming each testimonial card has 100% width
    testimonialsContainer.style.transform = `translateX(${translateX}%)`;
  }
}
