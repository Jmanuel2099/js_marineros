import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyHomeComponent } from './property-home/property-home.component';


@NgModule({
  declarations: [PropertyHomeComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
