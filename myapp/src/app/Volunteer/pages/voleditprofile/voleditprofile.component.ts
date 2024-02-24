import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';


  
interface voledit{
  volunteer_name:any,
  volunteer_contact:any,
  volunteer_email:any
}

@Component({
  selector: 'app-voleditprofile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './voleditprofile.component.html',
  styleUrl: './voleditprofile.component.css'
})
export class VoleditprofileComponent {
  vid:any
  
  voleditForm = new FormGroup(
   {
    volunteer_name: new FormControl(''),
    volunteer_contact: new FormControl(''),
    volunteer_email: new FormControl(''),
   }
 );

 ngOnInit() {
   this.volGetprofile();
 }
 
 volGetprofile(){

   
   if (typeof sessionStorage !== 'undefined') {

     this.vid = sessionStorage.getItem('vid');// Access sessionStorage here
     
 }

   axios.get(`http://localhost:5000/Vounteerprofile/${this.vid}`).then((response) => {
     // console.log(response.data.district[0].district_name)
     this.voleditForm.get('volunteer_name')?.setValue(response.data.volunteer[0].volunteer_name);
     this.voleditForm.get('volunteer_contact')?.setValue(response.data.volunteer[0].volunteer_contact);
     this.voleditForm.get('volunteer_email')?.setValue(response.data.volunteer[0].volunteer_email);
     // this.check = index

   })

 }
 onSubmit() {
   

   const voleditdata: voledit = {
    volunteer_name: this.voleditForm.value.volunteer_name,
    volunteer_contact: this.voleditForm.value.volunteer_contact,
    volunteer_email: this.voleditForm.value.volunteer_email,

   };

   axios.patch(`http://localhost:5000/voleditInsert/${this.vid}`, voleditdata).then((response) => {
   
     alert(response.data.message);
   
     
   })
}
}
