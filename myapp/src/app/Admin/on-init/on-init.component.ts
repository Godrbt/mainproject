import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  standalone: true,
  imports: [],
  templateUrl: './on-init.component.html',
  styleUrl: './on-init.component.css'
})
export class OnInitComponent implements OnInit {
  ngOnInit() {
    console.log('hello');
    
  }


}
