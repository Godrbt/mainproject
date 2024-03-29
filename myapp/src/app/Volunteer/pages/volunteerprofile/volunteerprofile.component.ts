import { Component } from '@angular/core';
import axios from 'axios';



interface VolunteerFetch {
  
  volunteer_name: any,
  volunteer_contact: any,
  volunteer_email: any,
  volunteer_id: any,
  volunteer_address:any,
  volunteer_photo:any

}

@Component({
  selector: 'app-volunteerprofile',
  standalone: true,
  imports: [],
  templateUrl: './volunteerprofile.component.html',
  styleUrl: './volunteerprofile.component.css'
})
export class VolunteerprofileComponent {

  volunteerdata!: VolunteerFetch;
  vid:any 
  ngOnInit() {
    this.VolunteerFetchdata();
  }
  VolunteerFetchdata() {
    if (typeof sessionStorage !== 'undefined') {
      this.vid = sessionStorage.getItem('vid');
  }

    axios.get(`http://localhost:5000/Vounteerprofile/${this.vid}`,).then((response) => {
      this.volunteerdata = response?.data?.volunteer[0]
    })
  }
}
