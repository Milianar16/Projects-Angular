import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubUser } from './interfaces/GithubUser';
import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithubUser
  repos: import("c:/Users/milir/OneDrive/Área de Trabalho/soulcode/repositorios/Angular/app-main/src/app/interfaces/GithubRepo").GithubRepo[] | undefined;

  constructor(
    private fb: FormBuilder,
    private githubService:GithubApiService,
    private snackBar: MatSnackBar // component. material p mostrar msg
  ) {}
  procurar(){
    const username = this.githubForm.get('username')?.value //recuperando o nome de usuario que deve ser procurado
    /**
     * Ordem das funçoes detro do Subscribe
     * 1- Sucesso
     * 2-Erro
     * 3-Completo
     */
    
    this.githubService.procurarUsuario(username).subscribe(
      (user)=>{
       this.gUser = user

      },
      (erro)=>{
      //HttpErrorResponse -erro que deu na requisição
      //preciso saber se o meu erro vem dessa classe
     
      if(erro instanceof HttpErrorResponse){
       if(erro.status == 404){
        this.snackBar.open(`O usuario ${username}não foi encontrado`, 'OK')
       }
      }
      }
    )
    this.githubService.procurarRepos(username).subscribe((repos)=>{
     this.repos = repos
    })
  }
}
