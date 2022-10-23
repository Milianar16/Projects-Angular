import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /* String Interpolation: utilizar valores que propriedades
 possuem para mostrá-los para o usuário 
*/ 
  
/**
 * property binding: utilizar valores de
 * propriedades atribui-los HTML
 */

/**
 * Two Way
 */
  title = 'data-binding'; //title é minha propriedade
  n1: number =0
  n2: number =0
  tipoInput:string ='text'
  somar(x:number, y:number){
    return x + y
  }
 mudarTipoDoInput():void{
  if(this.tipoInput == 'password'){
    this.tipoInput = 'text'
  }else{
    this.tipoInput = 'password'
  }
 }
}
