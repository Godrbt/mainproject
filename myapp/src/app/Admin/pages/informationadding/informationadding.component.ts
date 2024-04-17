import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface infoInterface {
  info_name: any;
  info_photo: any;
  info_details: any;
  cat_id: any;
  info_validity: any;
}
interface categoryFetch {
  cat_name: any;
  cat_id: any;
}

interface infoFetch {
  info_name: any;
  cat_name: any;
  infoadded_date: any;
  info_id: any;
  info_validity: any;
}

@Component({
  selector: 'app-informationadding',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './informationadding.component.html',
  styleUrl: './informationadding.component.css',
})
export class InformationaddingComponent {
  data: categoryFetch[] = [];
  filedata: any;
  infodata: infoFetch[] = [];

  infoaddingForm = new FormGroup({
    info_name: new FormControl(''),
    info_photo: new FormControl(''),
    info_details: new FormControl(''),
    cat_id: new FormControl(''),
    info_validity: new FormControl(''),
  });

  handleFile(event: any) {
    this.filedata = event.target.files[0];
  }

  var: any = '';
  onSubmit() {
    if (
      !this.infoaddingForm.get('info_details')?.valid ||
      !this.infoaddingForm.get('info_name')?.valid ||
      !this.infoaddingForm.get('cat_id')?.valid
    ) {
      alert('Fill all the required input fields');
      return;
    }

    const infodata: infoInterface = {
      info_name: this.infoaddingForm.value.info_name,
      info_photo: this.filedata,
      info_details: this.infoaddingForm.value.info_details,
      cat_id: this.infoaddingForm.value.cat_id,
      info_validity: this.infoaddingForm.value.info_validity,
    };
    const formData = new FormData();

    formData.append('info_name', infodata.info_name);
    formData.append('info_photo', infodata.info_photo);
    formData.append('info_details', infodata.info_details);
    formData.append('cat_id', infodata.cat_id);
    formData.append('info_validity', infodata.info_validity);

    axios
      .post('http://localhost:5000/informationadding/', formData)
      .then((response) => {
        alert(response.data.message);
        this.infoaddingForm.reset();
        this.infoFetchbyadmin();
      });
  }
  ngOnInit() {
    this.fetchCategory();
    this.infoFetchbyadmin();
  }

  fetchCategory() {
    axios.get('http://localhost:5000/category/').then((response) => {
      this.data = response.data.category;
    });
  }

  deleteRow(index: number): void {
    axios
      .delete(`http://localhost:5000/infoadmin/${index}`)
      .then((response) => {
        alert(response.data.message);

        this.infoFetchbyadmin();
      });
  }

  infoFetchbyadmin() {
    axios.get(`http://localhost:5000/informationadding2`).then((response) => {
      this.infodata = response.data.info;
    });
  }
}
