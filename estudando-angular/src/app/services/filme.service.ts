import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../interface.ts/filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "http://localhost:3000/films";

  public getAll(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.baseUrl);
  }
}