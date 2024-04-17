import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

interface VolunteerInterface {
  loc_id: any;
  volunteer_name: any;
  volunteer_contact: any;
  volunteer_email: any;
  volunteer_gender: any;
  volunteer_password: any;
  volunteer_address: any;
  volunteer_photo: any;
  volunteer_proof: any;
}

interface districtFetch {
  district_name: any;
  district_id: any;
}

interface LocationFetch {
  loc_id: any;
  loc_name: any;
  district_name: any;
}

@Component({
  selector: 'app-volunteerregistration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './volunteerregistration.component.html',
  styleUrl: './volunteerregistration.component.css',
})
export class VolunteerregistrationComponent {
  constructor(private route: ActivatedRoute) {}

  filedata: any;
  fileproof: any;

  data: districtFetch[] = [];
  locdata: LocationFetch[] = [];

  volunteerForm = new FormGroup({
    district_id: new FormControl(''),
    loc_id: new FormControl(''),
    volunteer_name: new FormControl(''),
    volunteer_contact: new FormControl(''),
    volunteer_email: new FormControl(''),
    volunteer_photo: new FormControl(''),
    volunteer_gender: new FormControl(''),
    volunteer_password: new FormControl(''),
    volunteer_address: new FormControl(''),
    volunteer_proof: new FormControl(''),
  });
  var: any = '';

  handleFile(event: any, field: string) {
    if (field === 'volunteer_photo') {
      this.filedata = event.target.files[0];
    } else if (field === 'volunteer_proof') {
      this.fileproof = event.target.files[0];
    }
  }

  onSubmit() {

    if (!this.volunteerForm.valid) {
      alert('Fill all the input fields');
      return;
    }

    const letter = this.volunteerForm.value.volunteer_name;
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

    const email = this.volunteerForm.value.volunteer_email;
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

    const contactNUM = this.volunteerForm.value.volunteer_contact;

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

    const password = this.volunteerForm.value.volunteer_password;
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

    const volunteerData: VolunteerInterface = {
      loc_id: this.volunteerForm.value.loc_id,
      volunteer_name: this.volunteerForm.value.volunteer_name,
      volunteer_contact: this.volunteerForm.value.volunteer_contact,
      volunteer_email: this.volunteerForm.value.volunteer_email,
      volunteer_photo: this.filedata,
      volunteer_gender: this.volunteerForm.value.volunteer_gender,
      volunteer_password: this.volunteerForm.value.volunteer_password,
      volunteer_address: this.volunteerForm.value.volunteer_address,
      volunteer_proof: this.fileproof,
    };
    const volunteerformdata = new FormData();

    volunteerformdata.append('volunteer_proof', volunteerData.volunteer_proof);
    volunteerformdata.append('volunteer_photo', volunteerData.volunteer_photo);
    volunteerformdata.append('volunteer_name', volunteerData.volunteer_name);
    volunteerformdata.append(
      'volunteer_contact',
      volunteerData.volunteer_contact
    );
    volunteerformdata.append('volunteer_email', volunteerData.volunteer_email);
    volunteerformdata.append(
      'volunteer_gender',
      volunteerData.volunteer_gender
    );
    volunteerformdata.append(
      'volunteer_password',
      volunteerData.volunteer_password
    );
    volunteerformdata.append(
      'volunteer_address',
      volunteerData.volunteer_address
    );
    volunteerformdata.append('loc_id', volunteerData.loc_id);

    axios
      .post('http://localhost:5000/volunteerregistration/', volunteerformdata)
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
        this.volunteerForm.reset();
      });
  }

  ngOnInit() {
    this.districtFetch();
  }

  districtFetch() {
    axios.get('http://localhost:5000/district/').then((response) => {
      this.data = response.data.district;
    });
  }

  locFetch(event: any) {
    const selectedDistrictId = event.target.value;
    axios
      .get(`http://localhost:5000/location/${selectedDistrictId}`)
      .then((response) => {
        console.log(response.data.location);
        this.locdata = response.data.location;
      });
  }
}
