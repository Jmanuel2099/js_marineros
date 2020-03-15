import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { CreateAdviserComponent } from './create-adviser/create-adviser.component';
import { ListRequestComponent } from './list-request/list-request.component';
import { CreateDomainComponent } from './create-domain/create-domain.component';


const routes: Routes = [
  {
    path: 'homeAdmin',
    component:HomeAdminComponent
  },
  {
    path:'createAdviser',
    component:CreateAdviserComponent
  },
  {
    path: 'listRequest',
    component: ListRequestComponent
  },
  {
    path: 'CreateDomain',
    component: CreateDomainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
