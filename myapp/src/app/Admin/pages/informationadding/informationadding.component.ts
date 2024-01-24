import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface infoInterface {
  info_name: any,
  info_photo: any,
  info_details: any
}




@Component({
  selector: 'app-informationadding',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './informationadding.component.html',
  styleUrl: './informationadding.component.css'
})
export class InformationaddingComponent {

  filedata: any
  // data: districtFetch[] = [];


  infoaddingForm = new FormGroup(
    {
      info_name: new FormControl(''),
      info_photo: new FormControl(''),
      info_details: new FormControl(''),
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
      info_details: this.infoaddingForm.value.info_details


    };
    const formData = new FormData();

    // Append data to the FormData object
    formData.append('info_name', infodata.info_name);
    formData.append('info_photo', infodata.info_photo);
    formData.append('info_details', infodata.info_details);




    axios.post('http://localhost:5000/informationadding/', formData).then((response) => {
      // console.log(response.data);
      alert(response.data.message);
      //  this.districtFetch();
      this.infoaddingForm.reset();
    })



  }







}
