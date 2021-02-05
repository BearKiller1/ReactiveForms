import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"Admin",
    children:[
      {
        path:"login",
        component:LoginComponent,
      },
      {
        path:"register",
        component:RegisterComponent,
      },
      {
        path:"register/:msg",
        component:RegisterComponent,
      },
      {
        path:"dashboard",
        component:DashboardComponent,
      },
      {
        path:"dashboard/:msg",
        component:DashboardComponent,
      },
      {
        path:"",
        redirectTo:"login",
        pathMatch:"full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
