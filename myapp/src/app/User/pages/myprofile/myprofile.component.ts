import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface UserFetch{
  loc_id: any,
  user_name: any,
  user_contact: any,
  user_email:any,
  user_gender:any,
  user_password:any,
  user_address:any,
  user_photo:any;
  user_id: any

}



@Component({
  selector: 'app-myprofile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent {
 
  userdata: UserFetch[] = [];
  // user_name: any;
  


  var: any = ''
  
  ngOnInit() {
    
    this.UserFetch();

  }
  UserFetch(){
    let user_id: number = 9;
    console.log(user_id);
    

    axios.get(`http://localhost:5000/userregistration/?user_id=${user_id}` ).then((response) => {
      // console.log(response.data.user)

     this.userdata = response.data.user



   })
 }
 

}
