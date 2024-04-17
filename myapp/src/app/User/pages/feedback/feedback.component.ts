import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface userfeedback{
  feedback_details:any
  user_id:any
}

interface ufeeddis {
  
  feedback_id:any
  feedback_details:any
  ufeedback_date:any

}



@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  uid:any
  userfeedbackdisplay: ufeeddis[] = [];

  userfeedform = new FormGroup(
    {
      userfeedback: new FormControl(''),
      
    }
  );
  var: any = ''
  onSubmit() {

    if (!this.userfeedform.valid) {

      alert('Fill all the input fields');
      return;
    }

  
    const userdata: userfeedback = {

      feedback_details: this.userfeedform.value.userfeedback,
      user_id:sessionStorage.getItem("uid")
    };
    axios.post(`http://localhost:5000/userfeed/`, userdata).then((response) => {
      alert(response.data.message)
      this.userfeedform.reset();
      this.Userfeeddetails();

    })
  }

  deleteRow(index: number): void {

    
    axios.delete(`http://localhost:5000/deletefeed/${index}`).then((response) => {
      alert(response.data.message)
     
      this.Userfeeddetails();


    })

  }



  ngOnInit() {
    this.Userfeeddetails();

  }
  Userfeeddetails() {

    if (typeof sessionStorage !== 'undefined') {

      this.uid = sessionStorage.getItem('uid');// Access sessionStorage here
      
  }



    axios.get(`http://localhost:5000/userfeeback1/${this.uid}`).then((response) => {

      this.userfeedbackdisplay = response.data.allfeed;


    })
  }


}
