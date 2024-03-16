 import { Routes } from '@angular/router';
import { MainComponent } from './Admin/component/main/main.component';
import { HomeComponent } from './Admin/pages/home/home.component';
import { DistrictComponent } from './Admin/pages/district/district.component';
// import { PlaceComponent } from './Admin/pages/place/place.component';
import { LocationComponent } from './Admin/pages/location/location.component';
import { CategoryComponent } from './Admin/pages/category/category.component';
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
import { FeedbackComponent } from './User/pages/feedback/feedback.component';
import { ComplaintComponent } from './User/pages/complaint/complaint.component';
import { AcceptedreqComponent } from './Volunteer/pages/acceptedreq/acceptedreq.component';
import { RejectedreqComponent } from './Volunteer/pages/rejectedreq/rejectedreq.component';
import { GuestmainComponent } from './Guest/components/guestmain/guestmain.component';
import { GuestHomeComponent } from './Guest/pages/guest-home/guest-home.component';
import { ViewFeedbackfromUsersComponent } from './Admin/pages/view-feedbackfrom-users/view-feedbackfrom-users.component';
import { ViewFeedbackfromvolComponent } from './Admin/pages/view-feedbackfromvol/view-feedbackfromvol.component';
import { ViewComplaintComponent } from './Admin/pages/view-complaint/view-complaint.component';



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
            {
                path: 'acceptedreq',
                component: AcceptedreqComponent,
            },
            {
                path: 'rejectedreq',
                component: RejectedreqComponent,
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
            {
                path: 'feedback',
                component: FeedbackComponent,
            },
            {
                path: 'complaint',
                component: ComplaintComponent,
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
             {
                path: 'view-feedbackfrom-users',
                component:ViewFeedbackfromUsersComponent,
            },
            {
                path: 'view-feedbackfromvol',
                component:ViewFeedbackfromvolComponent,
            },
            {
                path: 'view-complaint',
                component:ViewComplaintComponent,
            },
            

            


        ]
  },  

  {
    path: 'Guest',
    component:GuestmainComponent,
    children:[
        {
            path:'',
            redirectTo:'guest-home',
            pathMatch:'full'

        },
        {
            path: 'guest-home',
            component: GuestHomeComponent,
        },
        {
            path: 'userregistration',
             component: UserregistrationComponent,
              
          },
          
          {
            path: 'volunteerregistration',
             component: VolunteerregistrationComponent,
              
          }
        
    ]

},

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
