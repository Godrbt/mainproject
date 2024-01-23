import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';


interface DistrictInterface {
  districtName: any;
}
interface districtFetch {
  district_name: any,
  district_id: any
}


@Component({
  selector: 'app-district',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})


export class DistrictComponent {
  data: districtFetch[] = [];


  profileForm = new FormGroup(
    {
      district: new FormControl(''),
      // place: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    console.log(this.profileForm.value.district);

    const districtdata: DistrictInterface = {
      districtName: this.profileForm.value.district,

    };

    axios.post('http://localhost:5000/District/', districtdata).then((response) => {
      // console.log(response.data);
       alert(response.data.message)
       this.districtFetch();
       this.profileForm.reset();
    })



  }


  
  ngOnInit() {
    this.districtFetch();
  }

  districtFetch() {
    axios.get('http://localhost:5000/district/').then((response) => {
      // console.log(response.data.category)
     
      this.data = response.data.district
      


    })

  }


  
  deleteRow(index: number):void {

    // Remove the item at the specified index from the 'data' array
    axios.delete(`http://localhost:5000/district/${index}`).then((response) => {
      alert(response.data.message)
      // console.log(response.data)
      this.districtFetch()


    })

  }

}