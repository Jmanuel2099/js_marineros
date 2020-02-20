import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyHomeComponent } from './property-home/property-home.component';
import { PropertyUserComponent } from './property-user/property-user.component';


const routes: Routes = [
  {
    path:'PropertyHome',
    component: PropertyHomeComponent
  },
  {
    path:'PropertyUser',
    component: PropertyUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule {

 }
