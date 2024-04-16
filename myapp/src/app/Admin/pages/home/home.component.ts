import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { info } from 'console';

interface detailsFetch {
  user_name: any;
  user_contact: any;
}
interface voldetailsFetch {
  volunteer_name: any;
  volunteer_contact: any;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  details: detailsFetch[] = [];
  voldetails: voldetailsFetch[] = [];
  userCount: number | undefined;
  volCount: number | undefined;

  ngOnInit() {
    this.Userdetails();
    this.Usercount();
    this.Volcount();
    this.Voldetails();
  }
  Userdetails() {
    axios.get(`http://localhost:5000/Userdetails`).then((response) => {
      this.details = response.data.details;
    });
  }

  Voldetails() {
    axios.get(`http://localhost:5000/voldetailsfetch`).then((response) => {
      this.voldetails = response.data.voldetails;
    });
  }

  Usercount() {
    axios.get(`http://localhost:5000/usercount`).then((response) => {
      this.userCount = response?.data?.count?.[0]?.userCount;
    });
  }

  Volcount() {
    axios.get(`http://localhost:5000/volcount`).then((response) => {
      this.volCount = response?.data?.count?.[0]?.volCount;
    });
  }
}
