import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizzMakerPageComponent } from './pages/quizz-maker-page/quizz-maker-page.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'createyourquizz', component: QuizzMakerPageComponent},
  {path: 'quizzeslist', component: QuizzesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
