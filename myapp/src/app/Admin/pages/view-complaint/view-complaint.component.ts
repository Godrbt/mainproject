import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';


interface allcomplaintFetch{
  complaint_title:any,
  complaint_details:any,
  complaint_date:any
  complaint_id:any
}

interface replyinterface{
  complaint_reply:any
  complaint_id:any
}

@Component({
  selector: 'app-view-complaint',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './view-complaint.component.html',
  styleUrl: './view-complaint.component.css'
})
export class ViewComplaintComponent {


  allcomdata:allcomplaintFetch[]=[];
  comId: any;

  ngOnInit() {

    this.allcomplaintFetch();

  }

  allcomplaintFetch() {
  
    axios.get(`http://localhost:5000/allcomplaints/`).then((response) => {
      
      this.allcomdata = response.data.allcomplaint

    })
  }




replyForm = new FormGroup(
  {
    reply_Details: new FormControl(''),
  }
);

req() {
  const data: replyinterface = {
    complaint_reply: this.replyForm.value.reply_Details,
    complaint_id: this.comId,
  };

  axios.patch(`http://localhost:5000/complaintreply/${this.comId}`, data).then((response) => {
    alert(response.data.message)
    window.location.reload();
  })

}
complaint(event: any) {

  this.comId = event;
}


}
