import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';

interface userverificationFetch{
  user_contact:any,
  user_proof:any,
  user_name:any,
  user_email:any,
  user_id:any,
  userreq_status:any
}

@Component({
  selector: 'app-user-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-verification.component.html',
  styleUrl: './user-verification.component.css'
})
export class UserVerificationComponent {

  
  userverificationdata: userverificationFetch[] = [];
  user_id:any
  // vid:any 


  ngOnInit() {
    this.userverificationdetails();

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


  })
 }
 userrejectedbyadmin(event:any){
  this.user_id=event
axios.patch(`http://localhost:5000/userrequestreject/${this.user_id}` ).then((response) => {
  alert(response.data.message)
  this.userverificationdetails()


})
}


}
