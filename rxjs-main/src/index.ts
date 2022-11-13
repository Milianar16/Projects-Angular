import path from 'path'
import { filter, first, last, map, Observable, take } from 'rxjs'
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

const isCSS = /^((.|#|:){0,1}(\w+-{0,1})+\s*{(\s*(\w+-{0,1})+:\s*(\w+\s*)+;\s*)+\s*}\s*)/i
const isHTML = /^<!DOCTYPE html>/i

function lerArquivos(arquivos: string[]) {
  /*
    Observables são fontes de dados que enviam dados/informações de forma contínua
  */

  /**
   * A classe Observable recebe como parâmetro uma função responsável pela
   * geração dos dados que o Observable enviará
   */

  /**
   * subscriber é uma referência do dependente da informação 
   */

  const leitor = new Observable<string>((subscriber) => {
    /**
     * o método forEach (paraCada) Serve para fazer um laço de repetição
     * dentro de um array
     */

    arquivos.forEach((arquivo) => {
      /**
       * readFileSync fará a leitura de um arquivo a partir do caminho desse
       * arquivo no seu computador
       */

      try {
        const conteudo = fs.readFileSync(arquivo, { encoding: 'utf-8' })
        subscriber.next(conteudo)
      } catch (error) {
        subscriber.error(`Não foi possível ler o arquivo que está no caminho ${arquivo}`)
      }
       // responsável por mandar a mensagem de sucesso
      // subscriber.error() // responsável por mandar a mensagem de erro
      // subscriber.complete() // responsável por mandar a mensagem de completo

      /**
       * --> Envio de Dados do Observable <--
       * 
       * 3 ESTÁGIOS
       *   -> Sucesso: O Observable conseguiu realizar seu trabalho sem nenhum problema
       *               e enviou os dados com sucesso
       *   
       *   -> Erro: O Observable teve algum problema durante a sua execução e não conseguiu
       *            realizar sua tarefa de maneira satisfatória e não conseguiu enviar os dados.
       *            Quando um Observable passa pelo estágio de erro, sua execução para automaticamente
       * 
       *   -> Completo: O Observable realizou TODAS as suas tarefas com sucesso e não possui
       *                mais nenhum dado para poder enviar.
       */
    })

    subscriber.complete()
  })

  return leitor
}

let obs = lerArquivos(filePaths)

/**
 * o método subscribe() dos observables te permite acessar os valores
 * que o observable te envia de forma contínua
 */

/**
 * 1° -> Sucesso
 * 2° -> Erro
 * 3° -> Completo
 */

/**
 * Operadores -> Funções que servem para manipular os dados
 *               que os observables enviam
 */

/**
 * Utilizando algum operador do RXJS, vamos extrair a primeira palavra
 * de cada arquivo
 */

/**
 * a função pipe serve para você passar os operadores do RXJS que modificarão
 * os dados que o Observable retorna para você!
 */

/**
 * o operador map() serve para pegar o dado que enviado pelo Observable
 * e manipulá-lo de alguma forma para que você acesse esse dado modificado 
 */

/**
 * De todos os arquivos lidos, utilize um operador do RXJS para pegar
 * apenas os arquivos de CSS
 */

/**
 * o operador filter() serve para filtrar determinadas informações
 * que o Observable envia
 */

obs
.pipe(
/**map((texto)=>{
  return texto.split(' ')[0]
}),
map((palavra)=>{
 return palavra.length
})

o operador filter() serve para filtrar determinadas informações 
que o Observable envia*/
//filter((txt)=>{
 //return isCSS.test(txt)
//})
//filter((txt)=>{
 //return isHTML.test(txt)
//})
//filter((txt)=>{
 // return !isHTML.test(txt) == false && !isCSS.test(txt) ==false
// O operado take() serve para pegar uma quantidade X de dados que Observable envia})
//take(4)
//first() // pegar apenas o primeiro arquivo
//first((txt)=>{
//return isHTML.test(txt)
//})
//last()
//last((txt)=>{
 // return isCSS.test(txt)
//})
)
.subscribe(
  (conteudoLido)=>{
   console.log('----------ARQUIVO LIDO COM SUCESSO------------')
   console.log(conteudoLido)
   console.log('-------------------------------\n\n')
  },
  (erro)=>{
  console.log('OCORREU UM ERRO NA EXECUÇÃO DO OBSERVABLE')
  console.log(erro)
  },
  ()=>{
    console.log('TODOS OS ARQUIVOS FORAM LIDOS COM SUCESSO!!')
  }
)

/**obs.subscribe(
  (conteudoLido)=>{
    console.log(`Este arquivo possui ${conteudoLido.length}caracteres`)
  })*/