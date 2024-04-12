import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface volfeedback{
  vfeedback_details:any
  volunteer_id:any
}


interface vfeeddis {
  
  vfeedback_id:any
  vfeedback_details:any
  vfeedback_date:any

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
  volfeedbackdisplay: vfeeddis[] = [];

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
      this.vol1feeddetails();

    })
  }


  deleteRow(index: number): void {

    
    axios.delete(`http://localhost:5000/deletevfeed/${index}`).then((response) => {
      alert(response.data.message)
     
      this.vol1feeddetails();


    })

  }



  ngOnInit() {
    this.vol1feeddetails();

  }
  vol1feeddetails() {

    if (typeof sessionStorage !== 'undefined') {

      this.vid = sessionStorage.getItem('vid');// Access sessionStorage here
      
  }



    axios.get(`http://localhost:5000/volfeeback1/${this.vid}`).then((response) => {

      this.volfeedbackdisplay = response.data.allfeed;


    })
  }

}
