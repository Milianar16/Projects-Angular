import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  // injetar um objeto que permite o acesso os parâmetros da rota

  altImg: string = 'https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png'

  produto!: Produto
  produtoNaoEncontrado: boolean = false

  produtoForm: FormGroup = new FormGroup({
    descricao: new FormControl('', [ Validators.required ]),
    foto: new FormControl(''),
    nome: new FormControl('', [ Validators.required ]),
    preco: new FormControl('', [ Validators.required ])
  })

  constructor(
    private rota: ActivatedRoute, // permite acessar as informações (parâmetros) da rota que está ativa no momento
    private produtosService: ProdutosApiService,
    private router: Router
  ) { }

  ngOnInit(): void { // executado quando o componente é renderizado
    // paramMap é um objeto que possui acesso a todos os parâmetros da rota atual
    // get funciona para recuperar o valor de um parâmetro da rota atual
    const idProduto = this.rota.snapshot.paramMap.get('idProduto') as string
    this.produtosService.procurarPorId(parseInt(idProduto))
    .subscribe(
      (prod: Produto) => {
        this.produto = prod
        /**
         * setValue permite alterar o valor dos campos de um formGroup
         */
        this.produtoForm.setValue({
          descricao: prod.descricao,
          nome: prod.nome,
          foto: prod.foto,
          preco: prod.preco
        })
      },
      (erro) => {
        /*
          temos a certeza de que o produto realmente não existe.
        */
        this.produtoNaoEncontrado = true
      }
    )
  }

  deletar() {
    this.produtosService.deletarPorId(this.produto.id as number)
    .subscribe(
      () => {
        this.router.navigateByUrl('/produtos')
      }
    )
  }
}


 

