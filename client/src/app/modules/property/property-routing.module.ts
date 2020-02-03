import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyHomeComponent } from './property-home/property-home.component';


const routes: Routes = [
  {
    path:'PropertyHome',
    component: PropertyHomeComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule {

 }
