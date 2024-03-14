import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface userfeedback{
  feedback_details:any
  user_id:any
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

  userfeedform = new FormGroup(
    {
      userfeedback: new FormControl(''),
      
    }
  );
  var: any = ''
  onSubmit() {

  
    const userdata: userfeedback = {

      feedback_details: this.userfeedform.value.userfeedback,
      user_id:sessionStorage.getItem("uid")
    };
    axios.post(`http://localhost:5000/userfeed/`, userdata).then((response) => {
      alert(response.data.message)
      this.userfeedform.reset();

    })
  }


}
