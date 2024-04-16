import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';

interface reqFetch {
  user_contact: any;
  req_Details: any;
  user_name: any;
  req_id: any;
}

@Component({
  selector: 'app-userrequests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userrequests.component.html',
  styleUrl: './userrequests.component.css',
})
export class UserrequestsComponent {
  requestdata: reqFetch[] = [];
  vid: any;
  req_id: any;

  ngOnInit() {
    this.reqdetails();
  }
  reqdetails() {
    if (typeof sessionStorage !== 'undefined') {
      this.vid = sessionStorage.getItem('vid'); 
    }

    axios.get(`http://localhost:5000/request/${this.vid}`).then((response) => {
      this.requestdata = response.data.requestdata;
    });
  }
  userstat(event: any) {
    this.req_id = event;
    axios
      .patch(`http://localhost:5000/reqaccept/${this.req_id}`)
      .then((response) => {
        alert(response.data.message);
        this.reqdetails();
      });
  }

  userrejct(event: any) {
    this.req_id = event;
    axios
      .patch(`http://localhost:5000/reqreject/${this.req_id}`)
      .then((response) => {
        alert(response.data.message);
      });
  }
}
