import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import axios from 'axios';
// import {MatButtonModule} from '@angular/material/button';

// import {
//   MatDialog
// } from '@angular/material/dialog';


interface allcomplaintFetch{
  complaint_title:any,
  complaint_details:any,
  complaint_date:any
}

@Component({
  selector: 'app-view-complaint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-complaint.component.html',
  styleUrl: './view-complaint.component.css'
})
export class ViewComplaintComponent {


  allcomdata:allcomplaintFetch[]=[];

  ngOnInit() {

    this.allcomplaintFetch();

  }

  allcomplaintFetch() {
  
    axios.get(`http://localhost:5000/allcomplaints/`).then((response) => {
      
      this.allcomdata = response.data.allcomplaint

    })
  }

//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     this.dialog.open(ViewComplaintComponent);
// }


    


}
