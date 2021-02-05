import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:"Users",
    children:[
      {
        path:"home",
        component:HomeComponent,
      },
      {
        path:"contact",
        component:ContactComponent,
      },
      {
        path:"about",
        component:AboutComponent,
      },
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
