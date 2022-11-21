import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public findAllEstado(): Observable<any> {
    return this.http.get<any>("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
  }

  public findCidadesByEstado(estado: number): Observable<any> {
    return this.http.get<any>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
  }
}
