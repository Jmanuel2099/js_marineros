import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';
import { PropertyUserComponent } from './property-user/property-user.component';
import { ListRequestUserComponent } from './list-request-user/list-request-user.component';



const routes: Routes = [
  {
    path:'userHome',
    component: HomeUserComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'userProperty',
    component: PropertyUserComponent
  },
  {
    path:'listRecuestUser',
    component: ListRequestUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
