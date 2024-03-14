 import { Routes } from '@angular/router';
import { MainComponent } from './Admin/component/main/main.component';
import { HomeComponent } from './Admin/pages/home/home.component';
import { DistrictComponent } from './Admin/pages/district/district.component';
// import { PlaceComponent } from './Admin/pages/place/place.component';
import { LocationComponent } from './Admin/pages/location/location.component';
import { CategoryComponent } from './Admin/pages/category/category.component';

import { ScholarshipComponent } from './Admin/pages/scholarship/scholarship.component';
import path from 'node:path';
import { UserregistrationComponent } from './Guest/pages/userregistration/userregistration.component';
import { VolunteerregistrationComponent } from './Guest/pages/volunteerregistration/volunteerregistration.component';
import { UsermainComponent } from './User/components/usermain/usermain.component';
import { Component } from '@angular/core';
import { UserHomeComponent } from './User/pages/userhome/user-home.component';
import { MyprofileComponent } from './User/pages/myprofile/myprofile.component';
import { ChangepasswordComponent } from './User/pages/changepassword/changepassword.component';
import { InformationComponent } from './User/pages/information/information.component';
import { InformationaddingComponent } from './Admin/pages/informationadding/informationadding.component';
import { LoginComponent } from './Guest/pages/login/login.component';
import { VolunteermainComponent } from './Volunteer/components/volunteermain/volunteermain.component';
import { VolunteerhomeComponent } from './Volunteer/pages/volunteerhome/volunteerhome.component';
import { ApplypageComponent } from './User/pages/applypage/applypage.component';
import { UserrequestsComponent } from './Volunteer/pages/userrequests/userrequests.component';
import { VolunteerprofileComponent } from './Volunteer/pages/volunteerprofile/volunteerprofile.component';
import { VoleditprofileComponent } from './Volunteer/pages/voleditprofile/voleditprofile.component';
import { VolchangepassComponent } from './Volunteer/pages/volchangepass/volchangepass.component';
import { EditprofileComponent } from './User/pages/editprofile/editprofile.component';
import { VolfeedbackComponent } from './Volunteer/pages/volfeedback/volfeedback.component';
import { VerificationComponent } from './Admin/pages/verification/verification.component';
import { UserVerificationComponent } from './Admin/pages/user-verification/user-verification.component';
import { VolunteerbookingComponent } from './User/pages/volunteerbooking/volunteerbooking.component';
import { InfoVerificationComponent } from './Admin/pages/info-verification/info-verification.component';



export const routes: Routes = [
    {
        path: 'Volunteer',
        component:VolunteermainComponent,
        children:[
            {
                path:'',
                redirectTo:'volunteerhome',
                pathMatch:'full'
               

            },
            {
                path: 'volunteerhome',
                component: VolunteerhomeComponent,
            },
            {
                path: 'userrequests',
                component: UserrequestsComponent,
            },
            {
                path: 'volunteerprofile',
                component: VolunteerprofileComponent,
            },
            {
                path: 'voleditprofile',
                component: VoleditprofileComponent,
            },
            {
                path: 'volchangepass',
                component: VolchangepassComponent,
            },
            {
                path: 'volfeedback',
                component: VolfeedbackComponent,
            },
            
        ]
    },

    {
        path: 'User',
        component:UsermainComponent,
        children:[
            {
                path:'',
                redirectTo:'userhome',
                pathMatch:'full'
                // component: UserHomeComponent,

            },
            {
                path: 'userhome',
                component: UserHomeComponent,
            },
            {
                path: 'myprofile',
                component: MyprofileComponent,
            },
            {
                path: 'editprofile',
                component: EditprofileComponent,
            },
            {
                path: 'changepassword',
                component: ChangepasswordComponent,
            },
            {
                path: 'information',
                component: InformationComponent,
            },
            {
                path: 'volunteerbooking',
                component: VolunteerbookingComponent,
            },
             {
                path: 'applypage',
                component: ApplypageComponent,
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
            {
                path: 'informationadding',
                component:InformationaddingComponent,
            },
            {
                path: 'verification',
                component:VerificationComponent,
            },
            {
                path: 'user-verification',
                component:UserVerificationComponent,
            },
            {
                path: 'info-verification',
                component:InfoVerificationComponent,
            },
            

            


        ]
  }
  ,  
  {
    path: 'userregistration',
     component: UserregistrationComponent,
      
  },
  {
    path: 'Login',
     component: LoginComponent,
      
  },
  {
    path: 'volunteerregistration',
     component: VolunteerregistrationComponent,
      
  }
 ];
