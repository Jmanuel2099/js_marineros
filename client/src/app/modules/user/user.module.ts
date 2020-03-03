import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { PropertyUserComponent } from './property-user/property-user.component';
import { ListRequestUserComponent } from './list-request-user/list-request-user.component';




@NgModule({
  declarations: [HomeUserComponent, PropertyUserComponent, ListRequestUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
