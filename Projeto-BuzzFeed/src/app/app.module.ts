import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzMakerPageComponent } from './pages/quizz-maker-page/quizz-maker-page.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    HomeComponent,
    QuizzMakerPageComponent,
    MenuBarComponent,
    QuizzesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
