import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBar1Component } from './components/menu-bar1/menu-bar1.component';
import { MenuBar2Component } from './components/menu-bar2/menu-bar2.component';
import { SonyLogoComponent } from './components/sony-logo/sony-logo.component';
import { StoreLogoComponent } from './components/store-logo/store-logo.component';
import { MainImageComponent } from './components/main-image/main-image.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    MenuBar1Component,
    MenuBar2Component,
    SonyLogoComponent,
    StoreLogoComponent,
    MainImageComponent,
    MenuBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
