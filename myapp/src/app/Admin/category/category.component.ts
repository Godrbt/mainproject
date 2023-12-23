import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios, { Axios } from 'axios';


interface categoryInterface {
  catName: any;
}
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  profileForm = new FormGroup({
    cat: new FormControl(''),

  });
  var: any = ''
  onSubmit() {
    const catData: categoryInterface = {
      catName: this.profileForm.value.cat,
    };
    axios.post('http://localhost:5000/addcat/', catData).then((response) => {
      console.log(response.data);
    }
    )
  }

}
