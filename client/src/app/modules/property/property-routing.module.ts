import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyHomeComponent } from './property-home/property-home.component';
import { PropertyUserComponent } from './property-user/property-user.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';
import { UnAuthenticationRequiredGuard } from 'src/app/helpers/guards/un-authentication-required.guard';

const routes: Routes = [
  {
    path:'PropertyHome',
    component: PropertyHomeComponent,
    canActivate:[UnAuthenticationRequiredGuard]
  },
  {
    path:'PropertyUser',
    component: PropertyUserComponent,
    canActivate:[AuthenticationRequiredGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule {

 }
