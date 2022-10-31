import { Component } from '@angular/core';
import { Livro } from './interfaces/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'livraria';

  capa: string = ''
  titulo: string = ''
  autor: string = ''
  paginas: string = ''
  nota: string = ''

  listaLivros: Livro[] = []



  adicionarLivro(){
    this.listaLivros.push({
      titulo: this.titulo,
      capa: this.capa,
      autor: this.autor,
      paginas: this.paginas,
      nota: this.nota
    })

    this.capa = ''
    this.titulo = ''
    this.autor = ''
    this.paginas = ''
    this.nota = ''

  }  

  excluirLivro(livro: Livro){
    let index = this.listaLivros.indexOf(livro)
    this.listaLivros.splice(index,1)
  }

  estrelaContorno: string = '../assets/estrela-contorno.png'
  estrelaAmarela: string = '../assets/estrela.png'

  estrela: string = this.estrelaContorno
  estrela2: string = this.estrelaContorno
  estrela3: string = this.estrelaContorno
  estrela4: string = this.estrelaContorno
  estrela5: string = this.estrelaContorno

  
  mudarEstrela1(){
    this.estrela  = this.estrelaAmarela
  }

  mudarEstrela2(){
    this.estrela  = this.estrelaAmarela
    this.estrela2  = this.estrelaAmarela
  }

  mudarEstrela3(){
    this.estrela  = this.estrelaAmarela
    this.estrela2  = this.estrelaAmarela
    this.estrela3  = this.estrelaAmarela
  }

  mudarEstrela4(){
    this.estrela  = this.estrelaAmarela
    this.estrela2  = this.estrelaAmarela
    this.estrela3  = this.estrelaAmarela
    this.estrela4  = this.estrelaAmarela
  }

  mudarEstrela5(){
    this.estrela  = this.estrelaAmarela
    this.estrela2  = this.estrelaAmarela
    this.estrela3  = this.estrelaAmarela
    this.estrela4  = this.estrelaAmarela
    this.estrela5  = this.estrelaAmarela
  }

  receberNota1(){
    this.nota = '../assets/nota1.png'
    this.estrela = this.estrelaAmarela
    this.estrela2 = this.estrelaContorno
    this.estrela3 = this.estrelaContorno
    this.estrela4 = this.estrelaContorno
    this.estrela5 = this.estrelaContorno
    
  }
  
  receberNota2(){
    this.nota = '../assets/nota2.png'
    this.estrela = this.estrelaAmarela
    this.estrela2 = this.estrelaAmarela
    this.estrela3 = this.estrelaContorno
    this.estrela4 = this.estrelaContorno
    this.estrela5 = this.estrelaContorno
  }

  receberNota3(){
    this.nota = '../assets/nota3.png'
    this.estrela = this.estrelaAmarela
    this.estrela2 = this.estrelaAmarela
    this.estrela3 = this.estrelaAmarela
    this.estrela4 = this.estrelaContorno
    this.estrela5 = this.estrelaContorno
  }

  receberNota4(){
    this.nota = '../assets/nota4.png'
    this.estrela = this.estrelaAmarela
    this.estrela2 = this.estrelaAmarela
    this.estrela3 = this.estrelaAmarela
    this.estrela4 = this.estrelaAmarela
    this.estrela5 = this.estrelaContorno
  }

  receberNota5(){
    this.nota = '../assets/nota5.png'
    this.estrela = this.estrelaAmarela
    this.estrela2 = this.estrelaAmarela
    this.estrela3 = this.estrelaAmarela
    this.estrela4 = this.estrelaAmarela
    this.estrela5 = this.estrelaAmarela
  }


  estrelaVazia(){
      this.estrela = this.estrelaContorno
      this.estrela2 = this.estrelaContorno
      this.estrela3 = this.estrelaContorno
      this.estrela4 = this.estrelaContorno
      this.estrela5 = this.estrelaContorno
    }
    
  }