import { Component } from '@angular/core';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';

  /**
   * fazendo injeção de dependência dentro do componente
   */
constructor(
  public cService:ClientesService
) {}

ngOnInit():void{
  const clientes = this.cService.listarClientes()
  console.log(clientes)
}
}
