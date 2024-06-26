import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  user_proof:any
}

interface UserFetch{
  loc_id: any,
  user_name: any,
  user_contact: any,
  user_email:any,
  user_gender:any,
  user_password:any,
  user_address:any,
  user_photo:any,
  user_proof:any
  // user_id: any

}

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

  constructor(
    private route: ActivatedRoute){}

  filedata: any
  fileproof:any

  data: districtFetch[] = [];
  
  locdata: LocationFetch[] = [];
  userdata: UserFetch[] = [];

  userForm = new FormGroup(
    {
      district_id: new FormControl(''),
      loc_id: new FormControl(''),
      user_name :new FormControl(''),
      user_contact: new FormControl(''),
      user_email: new FormControl(''),
      user_photo : new FormControl(''),
      user_proof : new FormControl(''),
      user_gender: new FormControl(''),
      user_password: new FormControl(''),
      user_address:new FormControl('')

    }
  );
  var: any = ''

  handleFile(event: any, field: string) {
    if (field === 'user_photo') {
      this.filedata = event.target.files[0];
    } else if (field === 'user_proof') {
      this.fileproof = event.target.files[0];
    }
  }
  onSubmit() {
    
      
   
    if (!this.userForm.valid) {
      alert('Fill all the input fields');
      return;
    }

    const letter = this.userForm.value.user_name;
    if (!letter) {
      alert('name is required');
      return;
    }
    const alphabetRegex = /^[A-Z][a-z]*\s[A-Z][a-z]*$/;

    const isletterValid = alphabetRegex.test(letter);

    if (!isletterValid) {
      alert('Name must contain only letters also the first letter for both first and last must be capital');
      return;
    }

    const email = this.userForm.value.user_email;
    if (!email) {
      alert('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValid = emailRegex.test(email);

    if (!isEmailValid) {
      alert('Invalid email format');
      return;
    }

    const contactNUM = this.userForm.value.user_contact;

    if (!contactNUM) {
      alert('contact is required.');
      return;
    }

    const contactRegex = /^[0-9]{10}$/;
    const isContactValid = contactRegex.test(contactNUM);
    if (!isContactValid) {
      alert('Contact must contain only 10 digits');
      return;
    }

    const password = this.userForm.value.user_password;
    if (!password) {
      alert('Password is required.');
      return;
    }
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    const isPasswordValid = passwordRegex.test(password);

    if (!isPasswordValid) {
      alert(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return;
    }




    const UserData: UserInterface = {
      loc_id: this.userForm.value.loc_id,
      user_name:  this.userForm.value.user_name,
      user_contact :this.userForm.value.user_contact,
      user_email :this.userForm.value.user_email,
      user_photo :this.filedata,
      user_proof :this.fileproof,
      user_gender :this.userForm.value.user_gender,
      user_password :this.userForm.value.user_password,
      user_address :this.userForm.value.user_address

      // district_id: this.userForm.value.district_id

    };
    const userformdata = new FormData();

    userformdata.append('user_photo', UserData.user_photo);
    userformdata.append('user_proof', UserData.user_proof);
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
    this.UserFetch();

  }
  UserFetch(){

    axios.get('http://localhost:5000/userregistration/').then((response) => {
      console.log(response.data.user)

     this.userdata = response.data.user



   })
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
