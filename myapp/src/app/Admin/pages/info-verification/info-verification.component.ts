import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';


interface info{
  info_name: any,
  info_details: any,
  info_id:any,
  user_name:any,
  user_details:any,
  user_proof:any,
  apply_curdate:any
}

interface catFetch {
  cat_name: any,
  cat_id: any
}
@Component({
  selector: 'app-info-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-verification.component.html',
  styleUrl: './info-verification.component.css'
})
export class InfoVerificationComponent {
  infoverifydata: info[] = [];
  cat: catFetch[] = [];
   ngOnInit() {
   
    this.catFetch();
       this.infoVerificationFetch();    
   }
  catFetch() {

    axios.get('http://localhost:5000/category/').then((response) => {
      

      this.cat = response.data.category



    })
  }
  infoFetchdatabyId(event:any){
    const catID = event.target.value;

    axios.get(`http://localhost:5000/infoverificationbyID/${catID}`,).then((response) => {
  
      this.infoverifydata = response.data.infoverifybyID
    })

  }

  infoVerificationFetch(){
   
    

    axios.get(`http://localhost:5000/infoverification` ).then((response) => {
     

     this.infoverifydata = response.data.infoverifybyadmin



   })
 }

}
