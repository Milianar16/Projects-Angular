import { Component, Input, OnInit } from '@angular/core';
import { CartaoDeCredito } from '../interfaces/CartaoDeCredito';

@Component({
  selector: 'app-cartao-credito',
  templateUrl: './cartao-credito.component.html',
  styleUrls: ['./cartao-credito.component.css']
})
export class CartaoCreditoComponent implements OnInit {

 /**
   * O angular vai entender que a propriedade 'dadosCartao'
   * poderá receber valores externos ao componente, ou seja,
   * eu estando em outro componente conseguirei mudar o valor
   * da propriedade 'dadosCartao'
   */  
  @Input() 
  dadosCartao: CartaoDeCredito = {
   ano:'40',
   mes:'06',
   cvc:'123',
   nome:'Mc Daleste',
   numero:'1234 5678 9746 1458'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
