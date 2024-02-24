

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
  
interface edit{
  user_name:any,
  user_contact:any,
  user_email:any
}

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {


   uid:any
  
   editForm = new FormGroup(
    {
      user_name: new FormControl(''),
      user_contact: new FormControl(''),
      user_email: new FormControl(''),
    }
  );

  ngOnInit() {
    this.Getprofile();
  }
  
  Getprofile(){

    
    if (typeof sessionStorage !== 'undefined') {

      this.uid = sessionStorage.getItem('uid');// Access sessionStorage here
      
  }

    axios.get(`http://localhost:5000/userregistration/${this.uid}`).then((response) => {
      // console.log(response.data.district[0].district_name)
      this.editForm.get('user_name')?.setValue(response.data.user[0].user_name);
      this.editForm.get('user_contact')?.setValue(response.data.user[0].user_contact);
      this.editForm.get('user_email')?.setValue(response.data.user[0].user_email);
      // this.check = index

    })

  }
  onSubmit() {
    

    const editdata: edit = {
      user_name: this.editForm.value.user_name,
      user_contact: this.editForm.value.user_contact,
      user_email: this.editForm.value.user_email,

    };

    axios.patch(`http://localhost:5000/editInsert/${this.uid}`, editdata).then((response) => {
    
      alert(response.data.message);
    
      
    })
}
}