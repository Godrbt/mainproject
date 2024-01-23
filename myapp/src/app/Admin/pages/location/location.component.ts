import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface LocationInterface {
  loc_name: any,
  district_id: any
}

interface districtFetch {
  district_name: any,
  district_id: any
}

interface LocationFetch {
  loc_id:any,
  loc_name:any,
  // district_id:any
  district_name: any
}


@Component({
  selector: 'app-location',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  data: districtFetch[] = [];
  
  locdata: LocationFetch[] = [];

  locForm = new FormGroup(
    {
      district_id: new FormControl(''),
      loc_name: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    console.log(this.locForm.value.loc_name);
    const locationData: LocationInterface = {
      loc_name: this.locForm.value.loc_name,
      district_id: this.locForm.value.district_id

    };

    axios.post('http://localhost:5000/Location/', locationData).then((response) => {
      // console.log(response.data);
      alert(response.data.message)
      this.locForm.reset();
      this.locFetch();

    })



  }


  ngOnInit() {
    this.districtFetch();
    this.locFetch();

  }
  districtFetch() {
    axios.get('http://localhost:5000/district/').then((response) => {
       console.log(response.data.district)

      this.data = response.data.district



    })

  }
  locFetch(){
    axios.get('http://localhost:5000/location/').then((response) => {
      console.log(response.data.loaction)

     this.locdata = response.data.location

  })



}


  
deleteRow(index: number):void {

  // Remove the item at the specified index from the 'data' array
  axios.delete(`http://localhost:5000/location/${index}`).then((response) => {
    alert(response.data.message)
    // console.log(response.data)
    this.locFetch();


  })

}
}
