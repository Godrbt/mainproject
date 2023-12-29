import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {

}
