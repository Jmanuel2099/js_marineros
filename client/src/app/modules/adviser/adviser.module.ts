import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviserRoutingModule } from './adviser-routing.module';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { HomeAdviserComponent } from './home-adviser/home-adviser.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { EditorPropertyComponent } from './editor-property/editor-property.component';
import { ShowPropertiesComponent } from './show-properties/show-properties.component';
import { RequestAdviserComponent } from './request-adviser/request-adviser.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [CreatePropertyComponent, HomeAdviserComponent, EditorPropertyComponent, ShowPropertiesComponent, RequestAdviserComponent],
  imports: [
    CommonModule,
    AdviserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class AdviserModule { }
