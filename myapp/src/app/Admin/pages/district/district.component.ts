import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';


 interface DistrictInterface {
  districtName: any;
 }


@Component({
  selector: 'app-district',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})


export class DistrictComponent {
  profileForm = new FormGroup(
    {
      district: new FormControl(''),
      place: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    console.log(this.profileForm.value.district);
    const districtdata : DistrictInterface ={
     districtName: this.profileForm.value.district,

  };

  axios.post('http://localhost:5000/District/',districtdata).then((response) => {
    console.log(response.data);
  })



}
}