import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastradosComponent } from 'src/app/paginas/cadastrados/cadastrados.component';
import { RegistroComponent } from 'src/app/paginas/registro/registro.component';

const routes: Routes = [{
  path: "",
  component: RegistroComponent
},
{
  path: "cadastros",
  component: CadastradosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
