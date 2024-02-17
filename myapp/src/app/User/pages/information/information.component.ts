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
}

interface applyInterface{
  // apply_age:any,
  // apply_curdate:any,
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
  // uid:any 
  // user_name: any;
  

  
  ngOnInit() {
    this.infoFetch();

  }
  infoFetch(){
   
    

    axios.get(`http://localhost:5000/informationadding` ).then((response) => {
      console.log(response.data.info)

     this.infodata = response.data.info



   })
 }

 
 apply(info_id:any) {
    
  const data: applyInterface = {
    // apply_age: this.applyForm.value.apply_age,
    // apply_curdate: this.applyForm.value.apply_curdate,
    info_id: info_id,
    user_id:sessionStorage.getItem("uid")
  };
  axios.post('http://localhost:5000/apply/', data).then((response) => {
    alert(response.data.message)
  

  })
}



}
