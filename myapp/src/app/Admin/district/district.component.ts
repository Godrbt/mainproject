import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface DistrictInterface {
  districtName: any;
}


@Component({
  selector: 'app-district',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent  {
  profileForm = new FormGroup({
    district: new FormControl(''),
   
  });
    var: any=''
  onSubmit() {
  
    const districtData : DistrictInterface = {
      districtName: this.profileForm.value.district,
    };


    axios.post('http://localhost:5000/addDistrict/',districtData).then((response) => {
      console.log(response.data);
      
    })

    
  }




}
