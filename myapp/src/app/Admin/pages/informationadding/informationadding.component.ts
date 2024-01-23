import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface infoInterface{
  info_name:any,
  info_photo:any,
  info_details:any
}




@Component({
  selector: 'app-informationadding',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './informationadding.component.html',
  styleUrl: './informationadding.component.css'
})
export class InformationaddingComponent {


  // data: districtFetch[] = [];


  infoaddingForm = new FormGroup(
    {
      info_name: new FormControl(''),
      info_photo: new FormControl(''),
      info_details : new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    // console.log(this.infoaddingForm.value.district);
     const infodata: infoInterface = {
      info_name: this.infoaddingForm.value.info_name,
      info_photo: this.infoaddingForm.value.info_photo,
      info_details: this.infoaddingForm.value.info_details


    };

    axios.post('http://localhost:5000/informationadding/', infodata).then((response) => {
      // console.log(response.data);
       alert(response.data.message);
      //  this.districtFetch();
       this.infoaddingForm.reset();
    })



  }

  



}
