import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';
import { UnAuthenticationRequiredGuard } from 'src/app/helpers/guards/un-authentication-required.guard';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path:'Login',
    component: LoginComponent,
    canActivate:[UnAuthenticationRequiredGuard]
  },
  {
    path:'Logout',
    component: LogoutComponent,
    canActivate:[AuthenticationRequiredGuard]
  },
  {
    path:'RecoverPassword',
    component: RecoverPasswordComponent
  },
  {
    path:'register',
    component: RegisterComponent,
    canActivate:[UnAuthenticationRequiredGuard]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'Login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
