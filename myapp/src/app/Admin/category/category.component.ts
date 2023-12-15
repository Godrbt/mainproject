import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  cat = new FormControl('');

}
