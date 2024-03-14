import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-guestmain',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive,NavbarComponent,FooterComponent],
  templateUrl: './guestmain.component.html',
  styleUrl: './guestmain.component.css'
})
export class GuestmainComponent {

}
