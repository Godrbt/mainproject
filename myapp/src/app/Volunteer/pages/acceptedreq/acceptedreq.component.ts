import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';

interface reqFetch{
  user_contact:any,
  req_Details:any,
  user_name:any,
  req_id:any
}

@Component({
  selector: 'app-acceptedreq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acceptedreq.component.html',
  styleUrl: './acceptedreq.component.css'
})
export class AcceptedreqComponent {

  acceptrequestdata: reqFetch[] = [];
  vid:any 
  req_id: any;

  ngOnInit() {
    this.reqdetails();

  }
  reqdetails() {

    if (typeof sessionStorage !== 'undefined') {

      this.vid = sessionStorage.getItem('vid');// Access sessionStorage here
      
  }

    axios.get(`http://localhost:5000/acceptrequest/${this.vid}`).then((response) => {
     

      this.acceptrequestdata = response.data.acceptrequestdata;



    })
  }
  

 userrejct(event:any){
  this.req_id=event
  axios.patch(`http://localhost:5000/reqreject/${this.req_id}` ).then((response) => {
  alert(response.data.message)


})
}

}
