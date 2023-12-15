import { Routes } from '@angular/router';
import { DistrictComponent } from './Admin/district/district.component';
import { NavbarComponent } from './Admin/navbar/navbar.component';
import { PlaceComponent } from './Admin/place/place.component';
import { AdminhomepageComponent } from './Admin/adminhomepage/adminhomepage.component';
import { CategoryComponent } from './Admin/category/category.component';
import { SubcategoryComponent } from './Admin/subcategory/subcategory.component';
import { OnInitComponent } from './Admin/on-init/on-init.component';

export const routes: Routes = [
    {
        path: 'Admin',
        component: NavbarComponent,
        children: [
            {
                path: '',
                component: AdminhomepageComponent,
            },
            {
                path: 'District',
                component: DistrictComponent,
            },
            {
                path: 'place',
                component: PlaceComponent,
            },
            {
                path: 'category',
                component: CategoryComponent,
            },
            {
                path: 'subcategory',
                component: SubcategoryComponent,
            },
            {
                path: 'Oninit',
                component: OnInitComponent,
            },


        ]
    },

];
