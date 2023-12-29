 import { Routes } from '@angular/router';
import { MainComponent } from './Admin/component/main/main.component';
import { HomeComponent } from './Admin/pages/home/home.component';
import { DistrictComponent } from './Admin/pages/district/district.component';
import { PlaceComponent } from './Admin/pages/place/place.component';
import { LocationComponent } from './Admin/pages/location/location.component';
import { CategoryComponent } from './Admin/pages/category/category.component';
import { HospitalComponent } from './Admin/pages/hospital/hospital.component';
import { InstitutionComponent } from './Admin/pages/institution/institution.component';
import { ScholarshipComponent } from './Admin/pages/scholarship/scholarship.component';
export const routes: Routes = [
     {
    path: 'Admin',
     component: MainComponent,
        children: [
            {
                path: '',
                component:HomeComponent,
            },
            {
                path: 'district',
                component:DistrictComponent ,
            },
            {
                path: 'place',
                component: PlaceComponent,
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
                path: 'hospital',
                component:HospitalComponent,
            },
            {
                path: 'institution',
                component:InstitutionComponent,
            },
            {
                path: 'scholarship',
                component:ScholarshipComponent,
            },
            


        ]
  },

 ];
