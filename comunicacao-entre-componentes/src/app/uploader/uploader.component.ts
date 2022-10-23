import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
/*Event Emitter é uma classe que te permite
criar eventos customizados dentro do Angular*/
@Output()
uploadCompleto:EventEmitter<string> = new EventEmitter<string>() /*propriedade de eventoscustomizados EventEmitter*/
  constructor() { }

  ngOnInit(): void {
  }

  fazerUpload(){/*metódo*/
    alert('Upload iniciado...')

    /**O metódo emit() serve para iniciar a emissao do
     * evento personalizado
     */
    this.uploadCompleto.emit()
  }

}
