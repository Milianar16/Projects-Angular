import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {
  deletar(produtos: Produto[]) {
    throw new Error('Method not implemented.');
  }

  private readonly baseUrl: string = 'http://localhost:3000/produtos'

  constructor(
    private http: HttpClient
  ) { }

  // Listar informações -> GET
  listarProdutos() {
    return this.http.get<Array<Produto>>(this.baseUrl)
  }

  procurarPorId(id: number) {
    // http://localhost:3000/produtos/idProduto
    return this.http.get<Produto>(`${this.baseUrl}/${id}`) // fazendo a requisição para recuperar um produto por id
  }

  criarProduto(prod: Produto) { // prod possui as informações do produto que será salvo
    // http://localhost:3000/produtos
    return this.http.post<Produto>(this.baseUrl, prod)
  }

  deletarPorId(id: number) {
    // http://localhost:3000/produtos/id
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
}

