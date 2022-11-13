import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  router: any;
deletar() {
throw new Error('Method not implemented.');
}

  altImg: string = 'https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png'
  produtos: Produto[] = []

  constructor(
    private produtosService: ProdutosApiService
  ) { }

  ngOnInit(): void { // é chamado quando o componente foi colocado na tela (renderizado)
    this.produtosService.listarProdutos().subscribe(
      (prods) => {
        this.produtos = prods
      }
    )
  }

}