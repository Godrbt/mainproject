import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';


interface DistrictInterface {
  districtName: any;
}
interface districtFetch {
  district_name: any,
  district_id: any
}


@Component({
  selector: 'app-district',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})


export class DistrictComponent {
  data: districtFetch[] = [];
  check: number = 0


  profileForm = new FormGroup(
    {
      district: new FormControl(''),
      // place: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    
    const districtdata: DistrictInterface = {
      districtName: this.profileForm.value.district,

    };

    if (this.check === 0) {
      axios.post('http://localhost:5000/District/', districtdata).then((response) => {
      
        alert(response.data.message)
        this.districtFetch();
        this.profileForm.reset();
      })

    }
    else {
      axios.patch(`http://localhost:5000/District/${this.check}`, districtdata).then((response) => {
       
        alert(response.data.message)
        this.districtFetch();
        this.profileForm.reset();
        this.check = 0
      })

    }





  }



  ngOnInit() {
    this.districtFetch();
  }

  districtFetch() {
    axios.get('http://localhost:5000/district/').then((response) => {

      this.data = response.data.district



    })

  }



  deleteRow(index: number): void {

    // Remove the item at the specified index from the 'data' array
    axios.delete(`http://localhost:5000/district/${index}`).then((response) => {
      alert(response.data.message)
     
      this.districtFetch()


    })

  }



  getOneDistrict(index: number): any {

    axios.get(`http://localhost:5000/oneDistrict/${index}`).then((response) => {
      console.log(response.data.district[0].district_name)
      this.profileForm.get('district')?.setValue(response.data.district[0].district_name);
      this.check = index

    })

  }

}