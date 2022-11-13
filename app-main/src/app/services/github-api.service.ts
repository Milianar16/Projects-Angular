import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubRepo } from '../interfaces/GithubRepo';
import { GithubUser } from '../interfaces/GithubUser';


@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly baseURL:string = 'https://api.github.com/users/'
  

  constructor(
    private http: HttpClient // objeto responsavel por fazer as requisiçoes http no Angular
  ) { }

/**
 * Métodos Http
 * Leitura de dados-Get
 * Criacao de dados-Post
 * Atualização de dados-out
 * Delecao de dados ->delete
 * 
 */

procurarUsuario(username:string){
  //https://api.github.com/users/nomeDeUsuario
  /**
   * O objeto http, resposavel por fazer as requisiçoes,possui o método
   * get(),que serve para fazer requisiçoes HTTP utilizando o verbo GET. Basta apenas passar a URL de acesso
   * como parâmetro
   */
return this.http.get<GithubUser>(`${this.baseURL}${username}`)
}

procurarRepos(username:string){
  return this.http.get<GithubRepo[]>(`${this.baseURL}${username}/repos`)
}
}

