import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';

interface verificationFetch {
  volunteer_contact: any,
  volunteer_photo: any,
  volunteer_name: any,
  volunteer_email: any,
  volunteer_id: any,

}

interface allfeedbackFetch {
  user_photo: any,
  user_name: any,
  user_email: any,
  user_id: any,

  feedback_details:any,
  
}

@Component({
  selector: 'app-guest-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guest-home.component.html',
  styleUrl: './guest-home.component.css'
})
export class GuestHomeComponent {
  verificationdata: verificationFetch[] = [];
  allfeed: allfeedbackFetch[] = [];


  ngOnInit() {
    this.verificationdetails();
    this.feedbackdetails();
  
  }
  verificationdetails() {



    axios.get(`http://localhost:5000/volverification`).then((response) => {
      // console.log(response.data.requestdata)

      this.verificationdata = response.data.verificationdata;



    })
  }

  feedbackdetails() {



    axios.get(`http://localhost:5000/userfeeback`).then((response) => {
      

      this.allfeed = response.data.allfeed;



    })
  }




}
