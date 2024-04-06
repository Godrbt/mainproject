import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';


interface vfeeddis {

  volunteer_name: any,
  vfeedback_details:any

}

@Component({
  selector: 'app-view-feedbackfromvol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-feedbackfromvol.component.html',
  styleUrl: './view-feedbackfromvol.component.css'
})
export class ViewFeedbackfromvolComponent {


  volfeedbackdisplay: vfeeddis[] = [];

  ngOnInit() {
    this.volfeeddetails();

  }
  volfeeddetails() {



    axios.get(`http://localhost:5000/volfeeback`).then((response) => {

      this.volfeedbackdisplay = response.data.allvfeed;


    })
  }


}
