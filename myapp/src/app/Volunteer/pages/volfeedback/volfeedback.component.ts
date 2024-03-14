import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface volfeedback{
  vfeedback_details:any
  volunteer_id:any
}

@Component({
  selector: 'app-volfeedback',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './volfeedback.component.html',
  styleUrl: './volfeedback.component.css'
})
export class VolfeedbackComponent {

  vid:any

  volfeedform = new FormGroup(
    {
      volfeedback: new FormControl(''),
      
    }
  );
  var: any = ''
  onSubmit() {

  
    const voldata: volfeedback = {

      vfeedback_details: this.volfeedform.value.volfeedback,
      volunteer_id:sessionStorage.getItem("vid")
    };
    axios.post(`http://localhost:5000/volfeed/`, voldata).then((response) => {
      alert(response.data.message)
      this.volfeedform.reset();

    })
  }

}
