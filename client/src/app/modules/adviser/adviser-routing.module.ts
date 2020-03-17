import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdviserComponent } from './home-adviser/home-adviser.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { ShowPropertiesComponent } from './show-properties/show-properties.component';
import { EditorPropertyComponent } from './editor-property/editor-property.component';
import { RequestAdviserComponent } from './request-adviser/request-adviser.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';


const routes: Routes = [
{
  path:'homeAdviser',
  component: HomeAdviserComponent,
  canActivate: [AuthenticationRequiredGuard]
},
{
  path: 'createProperty',
  component: CreatePropertyComponent,
  canActivate: [AuthenticationRequiredGuard]
},
{
  path:'showProperties',
  component: ShowPropertiesComponent,
  canActivate: [AuthenticationRequiredGuard]
},
{
  path:'editProperty/:id',
  component: EditorPropertyComponent,
  canActivate: [AuthenticationRequiredGuard]
},
{
  path: 'recuestAdviser',
  component: RequestAdviserComponent,
  canActivate: [AuthenticationRequiredGuard]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviserRoutingModule { }
