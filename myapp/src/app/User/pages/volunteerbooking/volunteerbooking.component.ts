import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import axios from 'axios';

interface volfetch {
  volunteer_name: any;
  volunteer_contact: any;
  volunteer_photo: any;
  volunteer_address: any;
  volunteer_id: any;
}

interface districtFetch {
  district_name: any;
  district_id: any;
}

interface LocationFetch {
  loc_id: any;
  loc_name: any;

  district_name: any;
}

interface reqinterface {
  req_Details: any;
  user_id: any;

  volunteer_id: any;
}

@Component({
  selector: 'app-volunteerbooking',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    RouterLinkActive,
  ],
  templateUrl: './volunteerbooking.component.html',
  styleUrl: './volunteerbooking.component.css',
})
export class VolunteerbookingComponent {
  data: districtFetch[] = [];
  locdata: LocationFetch[] = [];
  voldata: volfetch[] = [];
  volId: any;
  uid: any;

  ngOnInit() {
    this.volFetchdata();
    this.districtFetch();
  }
  volFetchdata() {
    axios.get(`http://localhost:5000/volfetch/`).then((response) => {
      this.voldata = response.data.volunteerdata;
    });
  }
  volFetchdatabyId(event: any) {
    const selectedVolunteerId = event.target.value;

    axios
      .get(`http://localhost:5000/volfetchbyId/${selectedVolunteerId}`)
      .then((response) => {
        this.voldata = response.data.volunteerdatabyId;
      });
  }

  districtFetch() {
    axios.get('http://localhost:5000/district/').then((response) => {
      this.data = response.data.district;
    });
  }

  locFetch(event: any) {
    const selectedDistrictId = event.target.value;

    axios
      .get(`http://localhost:5000/location/${selectedDistrictId}`)
      .then((response) => {
        this.locdata = response.data.location;
      });
  }

  reqForm = new FormGroup({
    req_Details: new FormControl(''),
  });

  req() {
    const data: reqinterface = {
      req_Details: this.reqForm.value.req_Details,

      volunteer_id: this.volId,
      user_id: sessionStorage.getItem('uid'),
    };

    if (typeof sessionStorage !== 'undefined') {
      this.uid = sessionStorage.getItem('uid');
    }

    axios
      .get(`http://localhost:5000/volfetchbyuser/${this.volId}/${this.uid}`)
      .then((response) => {
        console.log(response.data.check);

        if (response.data.check) {
          axios
            .post('http://localhost:5000/requestForvol/', data)
            .then((response) => {
              alert(response.data.message);
              window.location.reload();
            });
        } else {
          alert(
            'wait till volunteer accepting or rejecting your request before sending another'
          );
        }
      });
  }

  vol(event: any) {
    this.volId = event;
  }
}
