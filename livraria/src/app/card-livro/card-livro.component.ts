import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Livro } from '../interfaces/interface';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.css']
})
export class CardLivroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  livro: Livro = {
    capa: '',
    titulo: '',
    autor: '',
    paginas: '',
    nota: ''
  }

  @Output()
  eventoExcluir: EventEmitter<Livro> = new EventEmitter<Livro>()

  excluirLivro(){
    this.eventoExcluir.emit()
  }

}
