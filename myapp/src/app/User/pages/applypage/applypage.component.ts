import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { info } from 'node:console';



interface applyInterface{
  apply_age:any,
  apply_curdate:any,
  info_id:any,
  user_id:any
}
interface applyfetch{
  info_name:any,
  info_details:any,
  info_id:any
}

@Component({
  selector: 'app-applypage',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './applypage.component.html',
  styleUrl: './applypage.component.css'
})
export class ApplypageComponent {

  
  applydata: applyfetch[] = [];

 

  ngOnInit() {
    this.applyfetch();
  }

  applyfetch() {
    axios.get('http://localhost:5000/applyfetch/').then((response) => {
      // console.log(response.data.category)
      this.applydata = response.data.apply
      


    })

  }



  applyForm = new FormGroup(
    {
      apply_age: new FormControl(''),
      apply_curdate: new FormControl(''),
    }
  );
  
  apply(info_id:any) {
    
    const data: applyInterface = {
      apply_age: this.applyForm.value.apply_age,
      apply_curdate: this.applyForm.value.apply_curdate,
      info_id: info_id,
      user_id:sessionStorage.getItem("uid")
    };
    axios.post('http://localhost:5000/apply/', data).then((response) => {
      alert(response.data.message)
    

    })
  }

}
