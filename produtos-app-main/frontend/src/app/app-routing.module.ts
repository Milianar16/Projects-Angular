import { NgModule } from "@angular/core";

// iniciar o roteamento
// importar o módulo de roteamento
import { RouterModule, Routes } from "@angular/router";
import { TestarNumeroGuard } from "./guard/testar-numero.guard";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";
import { NovoProdutoComponent } from "./pages/novo-produto/novo-produto.component";
import { ProdutoComponent } from "./pages/produto/produto.component";

// rota -> componente
/**
 * rotas é responsável por armazenar as rotas que
 * existem dentro do site
 *
 * cada item do array de rotas é uma nova rota que foi declarada
 *
 * href="notas.html"
 */
const rotas: Routes = [
  {
    // http://localhost:4200
    path: '', // caminho para acessar a rota (string vazia significa a rota principal)
    redirectTo: 'produtos', // redireciona o usuário para outra no momento que ele entrar nessa rota
    pathMatch: 'full'
  }, // cada objeto é uma rota
  {
    // http://localhost:4200/produtos
    path: 'produtos',
    component: ListarProdutosComponent
  },
  {
    path: 'produtos/novo',
    component: NovoProdutoComponent
  },
  {
    path: 'produtos/:idProduto', // rota com o parâmetro idProduto
    component: ProdutoComponent,
    canActivate: [
      TestarNumeroGuard
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotas) // módulo que inicia o roteamento e carrega as rotas que estão dentro do array
  ],
  providers: [],
  exports: [
    RouterModule // exportando o módulo após as rotas terem sido carregadas dentro dele
  ]
})
export class AppRoutingModule {}

