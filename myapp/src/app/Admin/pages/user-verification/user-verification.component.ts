import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface userverificationFetch{
  user_contact:any,
  user_proof:any,
  user_name:any,
  user_email:any,
  user_id:any,
  userreq_status:any
}


interface districtFetch {
  district_name: any,
  district_id: any
}

interface LocationFetch {
  loc_id: any,
  loc_name: any,
  district_name: any
}

@Component({
  selector: 'app-user-verification',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-verification.component.html',
  styleUrl: './user-verification.component.css'
})
export class UserVerificationComponent {

  
  userverificationdata: userverificationFetch[] = [];
  user_id:any
  data: districtFetch[] = [];
  locdata: LocationFetch[] = [];


  userverificationForm = new FormGroup(
    {
      district_id: new FormControl(''),
      loc_id: new FormControl(''),

    }
  );

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

  userFetchdatabyId(event: any) {
    const selecteduserId = event.target.value;

    axios.get(`http://localhost:5000/userfetchbyId/${selecteduserId}`,).then((response) => {
      this.userverificationdata = response.data.userdatabyId


    })
  }



  ngOnInit() {
    this.userverificationdetails();
    this.districtFetch();

  }
  userverificationdetails() {



    axios.get(`http://localhost:5000/userverification`).then((response) => {
      // console.log(response.data.requestdata)

      this.userverificationdata = response.data.userverificationdata;



    })
  }
  userrequest(event:any){
    this.user_id=event
  axios.patch(`http://localhost:5000/userrequestaccept/${this.user_id}` ).then((response) => {
    alert(response.data.message)
    this.userverificationdetails()
    this.userverificationForm.reset();


  })
 }
 userrejectedbyadmin(event:any){
  this.user_id=event
axios.patch(`http://localhost:5000/userrequestreject/${this.user_id}` ).then((response) => {
  alert(response.data.message)
  this.userverificationdetails()
  this.userverificationForm.reset();


})
}


}
