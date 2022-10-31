import { Injectable } from '@angular/core';
/**
 * provaidedIn informa onde o serviço será fornecido
 */
/**
 * A ideia de uma serviço no Angular
 * é encapsular alguma lógica q pode
 * ser utilizada em vários locais
 * da sua aplicação
 */


/**
 * C-CREATE
 * R- READ
 * U- UPDATE
 * D- DELETE
 */
interface Cliente{
  nome:string
  sobrenome:string
  telefone:string
  id:number
  email:string
  cpf:string
}
@Injectable({
  providedIn: 'root' // 'root faz referência ao AppModule'
})
export class ClientesService {

  private clientes:Cliente[]=[
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'frealves@gmail.com',
      telefone: '40028922',
      id: 1
    },
    {
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '22222222222',
      email: 'jose.almir@soulcodeacademy.org',
      telefone: '40028922',
      id: 2
    },
    {
      nome: 'Renato',
      sobrenome: 'Pereira',
      cpf: '33333333333',
      email: 'renato.pereira@soulcodeacademy.org',
      telefone: '40028922',
      id: 3
    }
  ]
  constructor() { }

  listarClientes(): Cliente[]{
    //toda a lógica pra acessar a api e pegar os dados
    return this.clientes
  }

  listarClientePeloId(id:number):Cliente | undefined{
    /**
     * O método find() dos arrays serve para procurar algum valor
     * dentro do array
     * 
     * é necessário que se passe como parâmetro de método find() uma 
     * função.
     * Essa função será utilizada dentro do método para procurar um valor
     * .A função que será passada DEVE retornar sempre um valor booleano.
     */
   const clienteEncontrado= this.clientes.find((c)=> {
      c.id==id
    })
    return clienteEncontrado
  }
}
