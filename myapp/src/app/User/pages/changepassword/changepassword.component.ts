

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios';
import { error } from 'console';

interface ChangeUserPass {
  newuser_password: any

}



@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css',
})
export class ChangepasswordComponent {
  uid: any;

  changeForm = new FormGroup({
    curuser_password: new FormControl(''),
    newuser_password: new FormControl(''),
    reuser_password: new FormControl(''),

  });
  curuser_password: any;
  userpassword: any;
  reuser_password: any;
  newuser_password: any;

  onSubmit() {



    const formData: ChangeUserPass = {
      newuser_password: this.changeForm.value.newuser_password,
    };
    console.log(this.changeForm.value);





    if (this.changeForm.value.curuser_password == this.userpassword) {

      if (this.changeForm.value.reuser_password == this.changeForm.value.newuser_password) {


        axios.patch(`http://localhost:5000/changepass/${this.uid}`, formData)
          .then((response) => {
            this.changeForm.reset();
            alert(response.data.message);
          })
          .catch((error) => {
            console.error('Error occurred while changing password:', error);
            // Handle error display or logging as needed
          });
      }
      else{
        console.log("error");
        
      }
    }
    else{
      console.log("error");
      
    }
    debugger
    
  }


  ngOnInit() {
    this.Getpassword();
  }

  Getpassword() {


    if (typeof sessionStorage !== 'undefined') {
      this.uid = sessionStorage.getItem('uid');
    }

    axios.get(`http://localhost:5000/userregistration/${this.uid}`).then((response) => {
      console.log(response.data.user[0].user_password)
      this.userpassword = response.data.user[0].user_password;
    })

  }
}
