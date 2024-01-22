import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-usermain',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './usermain.component.html',
  styleUrl: './usermain.component.css'
})
export class UsermainComponent {

}
