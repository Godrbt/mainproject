

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


    if (!this.changeForm.valid) {
      alert('Fill all the input fields');
      return;
    }


    const newpassword = this.changeForm.value.newuser_password;
    if (!newpassword) {
      alert('Password is required.');
      return;
    }
    const newpasswordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    const isnewPasswordValid = newpasswordRegex.test(newpassword);

    if (!isnewPasswordValid) {
      alert(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return;
    }

  


    const formData: ChangeUserPass = {
      newuser_password: this.changeForm.value.newuser_password,
    };


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
      else {
        console.log("error");
        alert('error in matching newpass')
        return

      }
    }
    else {
      console.log("error");
      alert('not current password ')
      return

    }

  }

  ngOnInit() {
    this.Getpassword();
  }

  Getpassword() {

    if (typeof sessionStorage !== 'undefined') {
      this.uid = sessionStorage.getItem('uid');
    }

    axios.get(`http://localhost:5000/userregistration/${this.uid}`).then((response) => {

      this.userpassword = response.data.user[0].user_password;
    })

  }
}
