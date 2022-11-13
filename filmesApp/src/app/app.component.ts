import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filmes } from './interface/filmes';
import { Resultado } from './interface/Resultado';
import { filmesAppService } from './services/filmesapp-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filme:FormGroup = this.fb.group({
    nomeFilme:[
     "",[Validators.required]
    ]
  })

  dadosFilmes!:filmes
  constructor(
 private filmeappService:filmesAppService,
 private fb:FormBuilder
  ) {}

  procurar(){
    const title = this.filme.get('nomeFilme')?.value
    this.filmeappService.procurar(title).subscribe(
        (dados)=>{
        this.dadosFilmes =dados
        console.log(this.dadosFilmes)
        }
    )
  }


}

