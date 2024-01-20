import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { log } from 'console';
import { response } from 'express';


interface CategoryInterface{
  categoryName:any;
  categoryDesc:any;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  catform= new FormGroup(
    {
      category: new FormControl(''),
      catdesc :new FormControl(''),
    }
  );
var: any = ''
onSubmit(){
  // console.log(this.profileForm.value.category);
  const catdata : CategoryInterface={
    categoryName: this.catform.value.category,
    categoryDesc:this.catform.value.catdesc
  };
  axios.post('http://localhost:5000/category/',catdata).then((response) => {
    console.log(response.data);
  })
}
}
