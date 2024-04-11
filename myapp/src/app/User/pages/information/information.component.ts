import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import axios from 'axios';

interface infoFetch{
  info_name: any,
  info_photo: any,
  info_details: any,
  cat_name:any,
  info_id:any
  infoadded_date:any
  info_validity:any
}

interface applyInterface{

  info_id:any,
  user_id:any
}


@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

  infodata: infoFetch[] = [];

  ngOnInit() {
    this.infoFetch();
  }

  infoFetch(){
    axios.get(`http://localhost:5000/informationadding` ).then((response) => {
     this.infodata = response.data.info
   })
 }

 
 apply(info_id:any) {
  const data: applyInterface = {
    info_id: info_id,
    user_id:sessionStorage.getItem("uid")
  };
  
  axios.get(`http://localhost:5000/informationaddingconfirm/${sessionStorage.getItem("uid")}/${info_id}` ).then((response) => {
  if(response.data.check)   {
    axios.post('http://localhost:5000/apply/', data).then((response) => {
      alert(response.data.message)
    })

  }
  else
  {
    alert("already applied")
  }
  
  
   })


 
}
}
