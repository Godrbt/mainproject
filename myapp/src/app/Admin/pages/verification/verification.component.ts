import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';


interface verificationFetch{
  volunteer_contact:any,
  volunteer_proof:any,
  volunteer_name:any,
  volunteer_email:any
  volunteer_id:any
}

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})
export class VerificationComponent {
  verificationdata: verificationFetch[] = [];
  vid:any 


  ngOnInit() {
    this.verificationdetails();

  }
  verificationdetails() {



    axios.get(`http://localhost:5000/volverification/${this.vid}`).then((response) => {
      // console.log(response.data.requestdata)

      this.verificationdata = response.data.verificationdata;



    })
  }
}
