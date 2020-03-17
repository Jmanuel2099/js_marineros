import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component'
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, RecoverPasswordComponent, RegisterComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  exports:[
    LoginComponent
  ]
})
export class SecurityModule { }
