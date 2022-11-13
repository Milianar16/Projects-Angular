import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CepFind } from '../interfaces/Cep-find';


@Injectable({
  providedIn: 'root'
})
export class CepApiService {

  private readonly baseUrl: string = 'https://viacep.com.br/ws/'

  constructor( private http: HttpClient ) { }

  procurarCep(cep: number) {

    return this.http.get<CepFind>(this.baseUrl + cep + "/json")
  }
}

