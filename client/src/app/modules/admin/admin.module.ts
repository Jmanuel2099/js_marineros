import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { CreateAdviserComponent } from './create-adviser/create-adviser.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListRequestComponent } from './list-request/list-request.component';
import { CreateDomainComponent } from './create-domain/create-domain.component';


@NgModule({
  declarations: [HomeAdminComponent, CreateAdviserComponent, ListRequestComponent, CreateDomainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
