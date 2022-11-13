import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filmes } from '../interface/filmes';
import { Resultado } from '../interface/Resultado';



@Injectable({
  providedIn: 'root'
})
export class filmesAppService {
  private readonly baseURL: string = 'https://api.themoviedb.org/3/search/movie?api_key=760785bf0f418019901845fbba091b40&query='

  constructor(private http:HttpClient){ }

  procurar(nome:string){
    const busca = nome.toLocaleLowerCase()
    busca.replace( /\n/g,"+")

    return this.http.get<filmes>(`${this.baseURL}${busca}`)
  }
}





