import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import axios from 'axios';

interface notificationfetch {
  volunteer_name: any
  req_id: any
  req_status:any
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  notification: notificationfetch[] = [];
  uid: any
  req_id: any

  constructor() { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  ngOnInit() {

    if (typeof sessionStorage !== 'undefined') {

      this.uid = sessionStorage.getItem('uid');// Access sessionStorage here

    }
    this.notifications();
  }

  notifications() {
    axios.get(`http://localhost:5000/notificationfromVol/${this.uid}`).then((response) => {

      this.notification = response.data.notitificationfromvol



    })

  }

  clear(event: any) {
    this.req_id = event
    axios.patch(`http://localhost:5000/clearnotification/${this.req_id}`).then((response) => {
      this.notifications() 


    })
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }
}
