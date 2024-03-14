import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';


interface verificationFetch {
  volunteer_contact: any,
  volunteer_proof: any,
  volunteer_name: any,
  volunteer_email: any,
  volunteer_id: any,
  volreq_status: any
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

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})
export class VerificationComponent {
  verificationdata: verificationFetch[] = [];
  volunteeer_id: any
  data: districtFetch[] = [];
  locdata: LocationFetch[] = [];

  verificationForm = new FormGroup(
    {
      district_id: new FormControl(''),
      loc_id: new FormControl(''),

    }
  );


  districtFetch() {
    axios.get('http://localhost:5000/district/').then((response) => {
    
      this.data = response.data.district



    })
  }


  locFetch(event: any) {
    const selectedDistrictId = event.target.value;

    axios.get(`http://localhost:5000/location/${selectedDistrictId}`).then((response) => {
      
      this.locdata = response.data.location

    })
  }

  volFetchdatabyId(event: any) {
    const selectedVolunteerId = event.target.value;

    axios.get(`http://localhost:5000/volfetchbyId/${selectedVolunteerId}`,).then((response) => {
      this.verificationdata = response.data.volunteerdatabyId


    })
  }


  ngOnInit() {
    this.verificationdetails();
    this.districtFetch();

  }
  verificationdetails() {



    axios.get(`http://localhost:5000/volverification`).then((response) => {
      // console.log(response.data.requestdata)

      this.verificationdata = response.data.verificationdata;



    })
  }

  volunteerrequest(event: any) {
    this.volunteeer_id = event
    axios.patch(`http://localhost:5000/volunteerrequestaccept/${this.volunteeer_id}`).then((response) => {
      alert(response.data.message)
      this.verificationdetails();

      this.verificationForm.reset();


    })
  }
  volunteerrejectedbyadmin(event: any) {
    this.volunteeer_id = event
    axios.patch(`http://localhost:5000/volunteerrequestreject/${this.volunteeer_id}`).then((response) => {
      alert(response.data.message)
      this.verificationdetails();

      this.verificationForm.reset();


    })
  }
}
