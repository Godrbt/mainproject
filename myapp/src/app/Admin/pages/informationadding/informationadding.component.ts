import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface infoInterface {
  info_name: any,
  info_photo: any,
  info_details: any,
  cat_id:any
  info_validity:any
}
interface categoryFetch {
  cat_name: any,
  cat_id: any
}



@Component({
  selector: 'app-informationadding',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './informationadding.component.html',
  styleUrl: './informationadding.component.css'
})
export class InformationaddingComponent {
   
  data: categoryFetch[] = [];
  filedata: any
  


  infoaddingForm = new FormGroup(
    {
      info_name: new FormControl(''),
      info_photo: new FormControl(''),
      info_details: new FormControl(''),
      cat_id: new FormControl(''),
      info_validity: new FormControl(''),

    }
  );

  handleFile(event: any) {
    this.filedata = event.target.files[0]

  }


  var: any = ''
  onSubmit() {
    // console.log(this.infoaddingForm.value.district);
    const infodata: infoInterface = {
      info_name: this.infoaddingForm.value.info_name,
      info_photo: this.filedata,
      info_details: this.infoaddingForm.value.info_details,
      cat_id: this.infoaddingForm.value.cat_id,
      info_validity: this.infoaddingForm.value.info_validity



    };
    const formData = new FormData();

    // Append data to the FormData object
    formData.append('info_name', infodata.info_name);
    formData.append('info_photo', infodata.info_photo);
    formData.append('info_details', infodata.info_details);
    formData.append('cat_id', infodata.cat_id);
    formData.append('info_validity', infodata.info_validity);




    axios.post('http://localhost:5000/informationadding/', formData).then((response) => {
      alert(response.data.message);
      this.infoaddingForm.reset();
    })



  }
  ngOnInit() {
    this.fetchCategory();
  }

  fetchCategory() {
    axios.get('http://localhost:5000/category/').then((response) => {
      this.data = response.data.category
      
    })

  }






}
