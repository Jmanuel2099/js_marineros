import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path:'Login',
    component: LoginComponent
  },
  {
    path:'Logout',
    component: LogoutComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/Login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
