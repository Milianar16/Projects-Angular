import path from 'path'
import { Observable } from 'rxjs'
import fs from 'fs'

const filePaths: string[] = [
  path.join(__dirname, 'files', 'app_1.txt'),
  path.join(__dirname, 'files', 'app_2.txt'),
  path.join(__dirname, 'files', 'app_3.txt'),
  path.join(__dirname, 'files', 'app_4.txt'),
  path.join(__dirname, 'files', 'estilo_1.css'),
  path.join(__dirname, 'files', 'estilo_2.css'),
  path.join(__dirname, 'files', 'estilo_3.css'),
  path.join(__dirname, 'files', 'estilo_4.css'),
  path.join(__dirname, 'files', 'estrutura_1.html'),
  path.join(__dirname, 'files', 'estrutura_2.html'),
  path.join(__dirname, 'files', 'estrutura_3.html'),
  path.join(__dirname, 'files', 'estrutura_4.html')
]

const isCSS = /^((.|#){0,1}(\w+-{0,1})+\s*{(\s*(\w+-{0,1})+:\s*(\w+\s*)+;\s*)+\s*}\s*)/i
const isHTML = /^<!DOCTYPE html>/i

function lerArquivos(arquivos:string[]){
  /**
   * Observables são fontes de dados que enviam dados/ informações de forma continua
   */

  /**
   * A classe Observable recebe como paramentor uma
   * funcao responsavel pela geração dos dados que o Observable enviará
   */
  /**
   * subscriber é uma referencia do dependente da informação
   */
const leitor = new Observable<string>((subscriber) =>{
  /**
   * O método forEach (paracada arquivo) serve para fazer uma laço de
   * repetição dentro de um array
   */
   arquivos.forEach((arquivo) =>{

    const conteudo =  fs.readFileSync(arquivo,{encoding:'utf-8'})
    subscriber.next(conteudo) // responsavel por mandar a msg de sucesso
    //subscriber.error()// responsavel por mandar a msg de erro
    //subscriber.complete()// responsavel por mandar a msg de completo

    /**
     * Envio Dados do Observable
     * 
     * Sucesso-Conseguiu enviar o arquivo com sucesso
     * 
     * Erro- teve problema na execução e não conseguiu realizar
     * sua tarefa de maneira satisfatória e não conseguiu enviar os dados
     * Quando um Observable passa pelo estágio de erro de erro, sua execução para automaticamente
     * 
     * Completo-O observable realizou Todas suas tarefas com sucesso e não possui
     * mais nenhum dado para poder enviar
     */


   })
})
return leitor
}

let obs = lerArquivos(filePaths)
/**
 * o método subscribe() dos observables te permite
 * acessar os valores que o observable
 * 
 * 1-Sucesso
 * 2-Erro
 * 3-Completo
 */
obs.subscribe(
  (conteudoLido)=>{
   console.log('----------ARQUIVO LIDO COM SUCESSO------------')
   console.log(conteudoLido)
   console.log('-------------------------------\n\n')
  }
)

obs.subscribe(
  (conteudoLido)=>{
    console.log(`Este arquivo possui ${conteudoLido.length}caracteres`)
  })