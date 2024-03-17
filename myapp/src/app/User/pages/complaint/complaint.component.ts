import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface Complaint{
complaint_title:any,
complaint_details:any,
user_id:any
}

interface complaintFetch{
  user_id:any,
  complaint_title:any,
  complaint_details:any,
  complaint_reply:any,
  complaint_date:any,
  complaint_id:any
}

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.css'
})
export class ComplaintComponent {


  comdata:complaintFetch[]=[];
  uid:any

  complaintForm = new FormGroup(
    {
      title: new FormControl(''),
      details: new FormControl('')
    }
  );

  onSubmit() {

  
    const complaintdata: Complaint = {

      complaint_title: this.complaintForm.value.title,
      complaint_details: this.complaintForm.value.details,
      user_id:sessionStorage.getItem("uid")
    };
         
         

    axios.post(`http://localhost:5000/userComplaint/`, complaintdata).then((response) => {
      alert(response.data.message)
      this.complaintForm.reset();

    })
    this.complaintFetch();
  }

  ngOnInit() {
    this.complaintFetch();

  }
  complaintFetch() {
     
    if (typeof sessionStorage !== 'undefined') {

      this.uid = sessionStorage.getItem('uid');
      
  }

    axios.get(`http://localhost:5000/compliant/${this.uid}`).then((response) => {
      
      this.comdata = response.data.complaint

    })
  }

  deleteRow(index: number): void {

    
    axios.delete(`http://localhost:5000/complaint/${index}`).then((response) => {
      alert(response.data.message)
     
      this.complaintFetch();


    })

  }

}
