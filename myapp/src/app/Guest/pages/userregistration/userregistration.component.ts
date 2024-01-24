import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';



interface UserInterface{
  loc_id: any,
  user_name: any,
  user_contact: any,
  user_email:any,
  user_gender:any,
  user_password:any,
  user_address:any,
  user_photo:any
}

// interface UserFetch{

// }

interface districtFetch {
  district_name: any,
  district_id: any
}

interface LocationFetch {
  loc_id:any,
  loc_name:any,
  // district_id:any
  district_name: any
}



@Component({
  selector: 'app-userregistration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './userregistration.component.html',
  styleUrl: './userregistration.component.css'
})



export class UserregistrationComponent {
  filedata: any

  data: districtFetch[] = [];
  
  locdata: LocationFetch[] = [];

  userForm = new FormGroup(
    {
      district_id: new FormControl(''),
      loc_id: new FormControl(''),
      user_name :new FormControl(''),
      user_contact: new FormControl(''),
      user_email: new FormControl(''),
      user_photo : new FormControl(''),
      user_gender: new FormControl(''),
      user_password: new FormControl(''),
      user_address:new FormControl('')

    }
  );
  var: any = ''

  handleFile(event: any) {
    this.filedata = event.target.files[0]

  }
  onSubmit() {
    // console.log(this.userForm.value.loc_name);
    const UserData: UserInterface = {
      loc_id: this.userForm.value.loc_id,
      user_name:  this.userForm.value.user_name,
      user_contact :this.userForm.value.user_contact,
      user_email :this.userForm.value.user_email,
      user_photo :this.filedata,
      user_gender :this.userForm.value.user_gender,
      user_password :this.userForm.value.user_password,
      user_address :this.userForm.value.user_address

      // district_id: this.userForm.value.district_id

    };
    const userformdata = new FormData();

    userformdata.append('user_photo', UserData.user_photo);
    userformdata.append('user_name', UserData.user_name);
    userformdata.append('user_contact', UserData.user_contact);
    userformdata.append('user_email', UserData.user_email);
    userformdata.append('user_gender', UserData.user_gender);
    userformdata.append('user_password', UserData.user_password);
    userformdata.append('user_address', UserData.user_address);
    userformdata.append('loc_id', UserData.loc_id);



    axios.post('http://localhost:5000/userregistration/', userformdata).then((response) => {
      // console.log(response.data);
      alert(response.data.message)
      this.userForm.reset();
      // this.locFetch();

    })



  }






  ngOnInit() {
    this.districtFetch();
    // this.locFetch();

  }
  districtFetch() {
    axios.get('http://localhost:5000/district/').then((response) => {
       console.log(response.data.district)

      this.data = response.data.district



    })
  }


  locFetch(event: any) {
    const selectedDistrictId = event.target.value;

    axios.get(`http://localhost:5000/location/${selectedDistrictId}`).then((response) => {
      console.log(response.data.location)

     this.locdata = response.data.location

  })  }
  


}
