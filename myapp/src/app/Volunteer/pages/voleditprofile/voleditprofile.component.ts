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
     this.voleditForm.get('volunteer_name')?.setValue(response.data.volunteer[0].volunteer_name);
     this.voleditForm.get('volunteer_contact')?.setValue(response.data.volunteer[0].volunteer_contact);
     this.voleditForm.get('volunteer_email')?.setValue(response.data.volunteer[0].volunteer_email);
   })
 }
 onSubmit() {

   
  if (!this.voleditForm.valid) {

    alert('Fill all the input fields');
    return;
  }


  const letter =this.voleditForm.value.volunteer_name;
  if(!letter){
    alert('name is required');
    return
  }
  const alphabetRegex= /^[A-Za-z\s]+$/;


  const isletterValid = alphabetRegex.test(letter);

  if (!isletterValid) {
    alert('Name must contain only letters');
    return;
  }
    


  const contactNUM = this.voleditForm.value.volunteer_contact;

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
