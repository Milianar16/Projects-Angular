import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculaNotaService {

  constructor() { }

  public calculaNota(n1: number, n2: number, n3: number): number {
    return (n1 + n2 + n3) / 3;
  }
}
