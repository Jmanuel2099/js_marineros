import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { CreateAdviserComponent } from './create-adviser/create-adviser.component';


const routes: Routes = [
  {
    path: 'homeAdmin',
    component:HomeAdminComponent
  },
  {
    path:'createAdviser',
    component:CreateAdviserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
