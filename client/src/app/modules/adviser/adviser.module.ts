import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviserRoutingModule } from './adviser-routing.module';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { HomeAdviserComponent } from './home-adviser/home-adviser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreatePropertyComponent, HomeAdviserComponent],
  imports: [
    CommonModule,
    AdviserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdviserModule { }
