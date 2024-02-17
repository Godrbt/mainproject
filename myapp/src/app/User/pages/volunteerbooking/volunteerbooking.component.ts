import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import axios from 'axios';

interface volfetch{
  volunteer_name:any,
  volunteer_contact:any,
  volunteer_photo:any,
  volunteer_address:any
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
  selector: 'app-volunteerbooking',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './volunteerbooking.component.html',
  styleUrl: './volunteerbooking.component.css'
})
export class VolunteerbookingComponent {
    
  data: districtFetch[] = [];
  locdata: LocationFetch[] = []; 
  voldata: volfetch[]=[]
  
  

  ngOnInit() {
    // this.uid = sessionStorage.getItem('uid')
    this.volFetchdata();
    this.districtFetch();
    
  }
  volFetchdata() {
  
    axios.get(`http://localhost:5000/volfetch/`,).then((response) => {
      console.log(response.data.volunteerdata)

      this.voldata = response.data.volunteerdata
      


    })
  }
  volFetchdatabyId(event:any) {
    const selectedVolunteerId = event.target.value;
  
    axios.get(`http://localhost:5000/volfetchbyId/${selectedVolunteerId}`,).then((response) => {
      console.log(response.data.volunteerdata)

      this.voldata = response.data.volunteerdatabyId
      


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
