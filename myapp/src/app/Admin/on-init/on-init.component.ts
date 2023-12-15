import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-on-init',
  standalone: true,
  imports: [],
  templateUrl: './on-init.component.html',
  styleUrl: './on-init.component.css'
})
export class OnInitComponent implements OnInit {
  ngOnInit() {
    axios.get('http://localhost:5000/Test').then((responce)=>{
      console.log(responce.data);
      
    })
    
  }


}
