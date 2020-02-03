import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { VisionComponent } from './public/vision/vision.component';
import { MisionComponent } from './public/mision/mision.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/home'
  },
  {
    path: 'vision',
    component: VisionComponent
  },
  {
    path: 'mision',
    component: MisionComponent
  },
  {
    path:'security',
    loadChildren: './modules/security/security.module#SecurityModule'
  },
  {
    path:'property',
    loadChildren: './modules/property/property.module#PropertyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }