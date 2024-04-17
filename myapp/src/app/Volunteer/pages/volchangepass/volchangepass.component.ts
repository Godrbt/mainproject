import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface ChangevolPass {
  newvol_password: any;
}

@Component({
  selector: 'app-volchangepass',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './volchangepass.component.html',
  styleUrl: './volchangepass.component.css',
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

    if (!this.volchangeForm.valid) {
      alert('Fill all the input fields');
      return;
    }

    // const password = this.volchangeForm.value.curvol_password;
    // if (!password) {
    //   alert('Password is required.');
    //   return;
    // }
    // const passwordRegex =
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    // const isPasswordValid = passwordRegex.test(password);

    // if (!isPasswordValid) {
    //   alert(
    //     'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.'
    //   );
    //   return;
    // }

    const newpassword = this.volchangeForm.value.newvol_password;
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

    // const repassword = this.volchangeForm.value.revol_password;
    // if (!repassword) {
    //   alert('Password is required.');
    //   return;
    // }
    // const repasswordRegex =
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    // const isrePasswordValid = repasswordRegex.test(repassword);

    // if (!isrePasswordValid) {
    //   alert(
    //     'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.'
    //   );
    //   return;
    // }

    const formData: ChangevolPass = {
      newvol_password: this.volchangeForm.value.newvol_password,
    };

    if (this.volchangeForm.value.curvol_password == this.volpassword) {
      if (
        this.volchangeForm.value.revol_password ==
        this.volchangeForm.value.newvol_password
      ) {
        axios
          .patch(`http://localhost:5000/volchangepass/${this.vid}`, formData)
          .then((response) => {
            this.volchangeForm.reset();
            alert(response.data.message);
          })
          .catch((error) => {
            console.error('Error occurred while changing password:', error);
          });
      } else {
        console.log('error in matching newpass');
        alert('error in matching newpass')
        return
      }
    } else {
      console.log('error not curpass');
      alert('not current password ')
      return
    }
  }

  ngOnInit() {
    this.Getvolpassword();
  }

  Getvolpassword() {
    if (typeof sessionStorage !== 'undefined') {
      this.vid = sessionStorage.getItem('vid');
    }

    axios
      .get(`http://localhost:5000/Vounteerprofile/${this.vid}`)
      .then((response) => {
        this.volpassword = response.data.volunteer[0].volunteer_password;
      });
  }
}
