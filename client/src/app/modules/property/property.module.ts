import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyHomeComponent } from './property-home/property-home.component';
import { PropertyUserComponent } from './property-user/property-user.component';


@NgModule({
  declarations: [PropertyHomeComponent, PropertyUserComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
