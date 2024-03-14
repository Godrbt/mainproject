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
  selector: 'app-rejectedreq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rejectedreq.component.html',
  styleUrl: './rejectedreq.component.css'
})
export class RejectedreqComponent {

  rejectedrequestdata: reqFetch[] = [];
  vid:any 
  req_id: any;

  ngOnInit() {
    this.reqdetails();

  }
  reqdetails() {

    if (typeof sessionStorage !== 'undefined') {

      this.vid = sessionStorage.getItem('vid');// Access sessionStorage here
      
  }

    axios.get(`http://localhost:5000/rejectedrequest/${this.vid}`).then((response) => {
      console.log(response.data.requestdata)

      this.rejectedrequestdata = response.data.rejectedrequestdata;



    })
  }
  userstat(event:any){
    this.req_id=event
  axios.patch(`http://localhost:5000/reqaccept/${this.req_id}` ).then((response) => {
    alert(response.data.message)


  })
 }


}
