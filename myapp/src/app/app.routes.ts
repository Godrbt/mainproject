 import { Routes } from '@angular/router';
import { MainComponent } from './Admin/component/main/main.component';
import { HomeComponent } from './Admin/pages/home/home.component';
import { DistrictComponent } from './Admin/pages/district/district.component';
// import { PlaceComponent } from './Admin/pages/place/place.component';
import { LocationComponent } from './Admin/pages/location/location.component';
import { CategoryComponent } from './Admin/pages/category/category.component';
// import { HospitalComponent } from './Admin/pages/hospital/hospital.component';
// import { InstitutionComponent } from './Admin/pages/institution/institution.component';
import { ScholarshipComponent } from './Admin/pages/scholarship/scholarship.component';
import path from 'node:path';
import { LoginComponent } from './Guest/pages/login/login.component';
import { UserregistrationComponent } from './Guest/pages/userregistration/userregistration.component';
import { VolunteerregistrationComponent } from './Guest/pages/volunteerregistration/volunteerregistration.component';
import { UsermainComponent } from './User/components/usermain/usermain.component';
import { Component } from '@angular/core';
import { UserHomeComponent } from './User/pages/userhome/user-home.component';


export const routes: Routes = [

    {
        path: 'User',
        component:UsermainComponent,
        children:[
            {
                path:'',
                component: UserHomeComponent,
            },
        ]

    },
     {
    path: 'Admin',
     component: MainComponent,
        children: [
            {
                path: 'Home',
                component:HomeComponent,
            },
            {
                path: 'District',
                component:DistrictComponent ,
            },
           
            {
                path: 'location',
                component: LocationComponent,
            },
            {
                path: 'category',
                component:CategoryComponent,
            },
          
            {
                path: 'scholarship',
                component:ScholarshipComponent,
            },
            


        ]
  }
 ];
