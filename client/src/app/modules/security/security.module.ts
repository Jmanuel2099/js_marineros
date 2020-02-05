import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RecoverPasswordComponent } from './recover-password/recover-password.component'

@NgModule({
  declarations: [LoginComponent, LogoutComponent, RecoverPasswordComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
