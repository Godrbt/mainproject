import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';

interface ufeeddis {

  user_name: any,
  feedback_details:any

}


@Component({
  selector: 'app-view-feedbackfrom-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-feedbackfrom-users.component.html',
  styleUrl: './view-feedbackfrom-users.component.css'
})
export class ViewFeedbackfromUsersComponent {

  userfeedbackdisplay: ufeeddis[] = [];

  ngOnInit() {
    this.Userfeeddetails();

  }
  Userfeeddetails() {



    axios.get(`http://localhost:5000/userfeeback`).then((response) => {

      this.userfeedbackdisplay = response.data.allfeed;


    })
  }

}
