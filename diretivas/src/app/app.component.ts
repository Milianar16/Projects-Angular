import { Component } from '@angular/core';
import { Produto } from './interfaces/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
 //p: Produto={
    //nome:'Laptop',
   // descricao:'Console Xuxa',
   // estoque:250,
    //preco:4000,
    //imagem:'https://cf.shopee.com.br/file/0c867de96b988b1497e63ba18088cce2'
  //}

  nome:string = ''
  imagem:string =''
  preco:number = 0
  estoque:number = 0
  descricao:string = ''

  produtos: Produto[] = []

  adicionarProduto(evento:any) : void{
    console.log(evento)
    evento.preventDefault() //faz com que o comportamento padrao de um elemento HTML seja anulado
    evento.stopPropagation()//evita com que a emissao do evento afete outros elementos HTML

    this.produtos.push({
      descricao:this.descricao,
      estoque:this.estoque,
      imagem:this.imagem,
      nome:this.nome,
      preco:this.preco
    })

  }

  deletarProduto(p: Produto):void{
    const index= this.produtos.indexOf(p)
    this.produtos.splice(index, 1)
      }
    }

  
