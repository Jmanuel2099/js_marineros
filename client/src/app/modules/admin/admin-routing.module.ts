import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { CreateAdviserComponent } from './create-adviser/create-adviser.component';
import { ListRequestComponent } from './list-request/list-request.component';
import { CreateDomainComponent } from './create-domain/create-domain.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';


const routes: Routes = [
  {
    path: 'homeAdmin',
    component:HomeAdminComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'createAdviser',
    component:CreateAdviserComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path: 'listRequest',
    component: ListRequestComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path: 'CreateDomain',
    component: CreateDomainComponent,
    canActivate: [AuthenticationRequiredGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
