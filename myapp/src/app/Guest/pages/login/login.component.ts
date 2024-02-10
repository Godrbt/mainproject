import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';


interface loginInterface {

  email: any,
  password: any
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  loginForm = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {


    const logindata: loginInterface = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password

    };

    axios.post('http://localhost:5000/login/', logindata).then((response) => {
      const { message, id, login } = response.data

      if (login === "user") {
        sessionStorage.setItem("uid", id)

        this.router.navigate(["/User"])
      }
      if (login === "volunteer") {
        sessionStorage.setItem("vid", id)
        this.router.navigate(["/User"])

      }
      if (login === "admin") {
        sessionStorage.setItem("aid", id)
        this.router.navigate(["/Admin"])


      }
      console.log(message);
      console.log(id);
      console.log(login);





    })
  }


}