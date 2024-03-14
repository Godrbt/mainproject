import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';


interface ChangevolPass {
  newvol_password: any

}

@Component({
  selector: 'app-volchangepass',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './volchangepass.component.html',
  styleUrl: './volchangepass.component.css'
})
export class VolchangepassComponent {

  newvol_password: any;
  volpassword: any;
  revol_password: any;
  curvol_password: any;
  vid: any;

  volchangeForm = new FormGroup({
    curvol_password: new FormControl(''),
    newvol_password: new FormControl(''),
    revol_password: new FormControl(''),

  });
  

  onSubmit() {



    const formData: ChangevolPass = {
      newvol_password: this.volchangeForm.value.newvol_password,
    };
   





    if (this.volchangeForm.value.curvol_password == this.volpassword) {

      if (this.volchangeForm.value.revol_password == this.volchangeForm.value.newvol_password) {


        axios.patch(`http://localhost:5000/volchangepass/${this.vid}`, formData)
          .then((response) => {
            this.volchangeForm.reset();
            alert(response.data.message);
          })
          .catch((error) => {
            console.error('Error occurred while changing password:', error);
           
          });
      }
      else{
        console.log("error in matching newpass");
        
      }
    }
    else{
      console.log("error not curpass");
      
    }
   
    
  }


  ngOnInit() {
    this.Getvolpassword();
  }

  Getvolpassword() {


    if (typeof sessionStorage !== 'undefined') {
      this.vid = sessionStorage.getItem('vid');
    }

    axios.get(`http://localhost:5000/Vounteerprofile/${this.vid}`).then((response) => {
    
      this.volpassword = response.data.volunteer[0].volunteer_password;
    })

  }
}
