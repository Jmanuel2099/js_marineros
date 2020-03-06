import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdviserComponent } from './home-adviser/home-adviser.component';
import { CreatePropertyComponent } from './create-property/create-property.component';


const routes: Routes = [
{
  path:'homeAdviser',
  component: HomeAdviserComponent
},
{
  path: 'createProperty',
  component: CreatePropertyComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviserRoutingModule { }
