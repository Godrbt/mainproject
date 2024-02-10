import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { VolunteerfooterComponent } from '../volunteerfooter/volunteerfooter.component';

@Component({
  selector: 'app-volunteermain',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet,NavbarComponent,VolunteerfooterComponent],
  templateUrl: './volunteermain.component.html',
  styleUrl: './volunteermain.component.css'
})
export class VolunteermainComponent {

}
