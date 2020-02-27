import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { UnAuthenticationRequiredGuard } from './helpers/guards/un-authentication-required.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'security',
    loadChildren: './modules/security/security.module#SecurityModule'
  },
  {
    path:'property',
    loadChildren: './modules/property/property.module#PropertyModule'
  },
  {
    path:'user',
    loadChildren: './modules/user/user.module#UserModule',
    canActivate:[UnAuthenticationRequiredGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
