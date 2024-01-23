import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';


interface CategoryInterface {
  categoryName: any;
  categoryDesc: any;
}

interface categoryFetch {
  cat_name: any,
  cat_description: any,
  cat_id: any
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {


  data: categoryFetch[] = [];

  deleteRow(index: number):void {

    // Remove the item at the specified index from the 'data' array
    axios.delete(`http://localhost:5000/category/${index}`).then((response) => {
      alert(response.data.message)
      // console.log(response.data)
      this.fetchCategory()


    })

  }


  ngOnInit() {
    this.fetchCategory();
  }

  fetchCategory() {
    axios.get('http://localhost:5000/category/').then((response) => {
      // console.log(response.data.category)
      this.data = response.data.category
      


    })

  }



  catform = new FormGroup(
    {
      catname: new FormControl(''),
      catdesc: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    // console.log(this.profileForm.value.category);
    const catdata: CategoryInterface = {
      categoryName: this.catform.value.catname,
      categoryDesc: this.catform.value.catdesc
    };
    axios.post('http://localhost:5000/category/', catdata).then((response) => {
      alert(response.data.message)
      this.catform.reset();
      this.fetchCategory();

    })
  }
}


