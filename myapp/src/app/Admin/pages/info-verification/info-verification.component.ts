import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';


interface info {
  info_name: any,
  info_details: any,
  info_id: any,
  user_name: any,
  user_details: any,
  user_proof: any,
  apply_curdate: any
  info_status:any,
}

interface catFetch {
  cat_name: any,
  cat_id: any
}
@Component({
  selector: 'app-info-verification',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './info-verification.component.html',
  styleUrl: './info-verification.component.css'
})
export class InfoVerificationComponent {
  infoverifydata: info[] = [];
  cat: catFetch[] = [];
  info_id:any

  infoverificationForm = new FormGroup(
    {
      cat_id: new FormControl(''),
    }
  );


  ngOnInit() {
    this.catFetch();
    this.infoVerificationFetch();
  }

  catFetch() {
    axios.get('http://localhost:5000/category/').then((response) => {
      this.cat = response.data.category
    })
  }

  infoFetchdatabyId(event: any) {
    const catID = event.target.value;
    axios.get(`http://localhost:5000/infoverificationbyID/${catID}`,).then((response) => {
      this.infoverifydata = response.data.infoverifybyID
    })
  }

  infoVerificationFetch() {
    axios.get(`http://localhost:5000/infoverification`).then((response) => {
      this.infoverifydata = response.data.infoverifybyadmin
    })
  }

  infoaccept(event:any){
    this.info_id=event
  axios.patch(`http://localhost:5000/infoaccept/${this.info_id}` ).then((response) => {
    alert(response.data.message)
    this.infoVerificationFetch()
    this.infoverificationForm.reset();


  })
 }
 inforreject(event:any){
  this.info_id=event
axios.patch(`http://localhost:5000/inforeject/${this.info_id}` ).then((response) => {
  alert(response.data.message)
  this.infoVerificationFetch()
  this.infoverificationForm.reset();


})
}

}
