import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { HomeComponent } from './public/home/home.component';
import { VisionComponent } from './public/vision/vision.component';
import { MisionComponent } from './public/mision/mision.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    VisionComponent,
    MisionComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
