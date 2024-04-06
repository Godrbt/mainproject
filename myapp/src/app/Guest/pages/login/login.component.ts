import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import axios from 'axios';


interface loginInterface {

  email: any,
  password: any
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  

  constructor(private router: Router) { }


  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
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
        this.router.navigate(["/Volunteer"])

      }
      if (login === "admin") {
        sessionStorage.setItem("aid", id)
        this.router.navigate(["/Admin"])


      }
      else
      console.log(message);
      console.log(id);
      console.log(login);





    })
  }


}