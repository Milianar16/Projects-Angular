import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcNotaComponent } from './views/calc-nota/calc-nota.component';
import { FilmsListComponent } from './views/films-list/films-list.component';

import { FormsComponent } from './views/forms/forms.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "forms",
    component: FormsComponent
  },
  {
    path: "calcNota",
    component: CalcNotaComponent
  },
  {
    path: "filmes",
    component: FilmsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
