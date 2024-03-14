import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { info } from 'console';


interface detailsFetch {

  user_name: any,
  user_contact: any,
  apply_curdate: any,
  info_name: any,
  info_details: any

}



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  details: detailsFetch[] = [];

  ngOnInit() {
    this.Userdetails();

  }
  Userdetails() {



    axios.get(`http://localhost:5000/Userdetails`).then((response) => {

      this.details = response.data.details;


    })
  }


}
