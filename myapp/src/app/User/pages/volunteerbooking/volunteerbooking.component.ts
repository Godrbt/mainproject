import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import axios from 'axios';

interface volfetch {
  volunteer_name: any,
  volunteer_contact: any,
  volunteer_photo: any,
  volunteer_address: any,
  volunteer_id: any
}

interface districtFetch {
  district_name: any,
  district_id: any
}

interface LocationFetch {
  loc_id: any,
  loc_name: any,
  // district_id:any
  district_name: any
}

interface reqinterface {
  req_Details: any,
  user_id: any,
  req_date: any,
  volunteer_id: any
}

@Component({
  selector: 'app-volunteerbooking',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, ReactiveFormsModule],
  templateUrl: './volunteerbooking.component.html',
  styleUrl: './volunteerbooking.component.css'
})
export class VolunteerbookingComponent {

  data: districtFetch[] = [];
  locdata: LocationFetch[] = [];
  voldata: volfetch[] = []
  volId: any



  ngOnInit() {
    // this.uid = sessionStorage.getItem('uid')
    this.volFetchdata();
    this.districtFetch();

  }
  volFetchdata() {

    axios.get(`http://localhost:5000/volfetch/`,).then((response) => {
      console.log(response.data.volunteerdata)

      this.voldata = response.data.volunteerdata



    })
  }
  volFetchdatabyId(event: any) {
    const selectedVolunteerId = event.target.value;

    axios.get(`http://localhost:5000/volfetchbyId/${selectedVolunteerId}`,).then((response) => {
      console.log(response.data.volunteerdatabyId)

      this.voldata = response.data.volunteerdatabyId
      // this.voldataForId = response.data.volunteerdatabyId
      // this.voldataForId = event.target.value;



    })
  }


  districtFetch() {
    axios.get('http://localhost:5000/district/').then((response) => {
      console.log(response.data.district)

      this.data = response.data.district



    })
  }


  locFetch(event: any) {
    const selectedDistrictId = event.target.value;

    axios.get(`http://localhost:5000/location/${selectedDistrictId}`).then((response) => {
      console.log(response.data.location)

      this.locdata = response.data.location

    })
  }


  // req insert //
  reqForm = new FormGroup(
    {
      req_Details: new FormControl(''),
      req_date: new FormControl(''),
    }
  );

  req() {



    const data: reqinterface = {
      req_Details: this.reqForm.value.req_Details,
      req_date: this.reqForm.value.req_date,
      volunteer_id: this.volId,
      user_id: sessionStorage.getItem("uid")
    };
    axios.post('http://localhost:5000/requestForvol/', data).then((response) => {
      alert(response.data.message)


    })

  }

  vol(event: any) {
   
    
    this.volId = event;
  }



}