import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprimento'
})
export class ComprimentoPipe implements PipeTransform {
  /**
   * Pegar um array qualquer
   * e retornar a quantidade de elementos dentro
   * dele
   * 
   * value: parâmetro responsável por pegar o valor
   * que será transformado
   * args:
   * 
   * o parâmetro 'value' no método transform é obrigatório
   * 
   * Mas caso queira passar outros paramnetros iss 
   */
  transform(value: any[]): number {
    return value.length;
  }

}
