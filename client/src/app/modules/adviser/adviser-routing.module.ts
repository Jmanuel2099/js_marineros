import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdviserComponent } from './home-adviser/home-adviser.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { ShowPropertiesComponent } from './show-properties/show-properties.component';
import { EditorPropertyComponent } from './editor-property/editor-property.component';
import { RequestAdviserComponent } from './request-adviser/request-adviser.component';


const routes: Routes = [
{
  path:'homeAdviser',
  component: HomeAdviserComponent
},
{
  path: 'createProperty',
  component: CreatePropertyComponent
},
{
  path:'showProperties',
  component: ShowPropertiesComponent
},
{
  path:'editProperty/:id',
  component: EditorPropertyComponent
},
{
  path: 'recuestAdviser',
  component: RequestAdviserComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviserRoutingModule { }
