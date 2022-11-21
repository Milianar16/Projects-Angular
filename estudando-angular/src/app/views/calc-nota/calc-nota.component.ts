import { Component, OnInit } from '@angular/core';
import { CalculaNotaService } from 'src/app/services/calcula-nota.service';

@Component({
  selector: 'app-calc-nota',
  templateUrl: './calc-nota.component.html',
  styleUrls: ['./calc-nota.component.css']
})
export class CalcNotaComponent {

  public nota1: number = NaN;
  public nota2: number = NaN;
  public nota3: number = NaN;
  public media: number = 0.0;

  constructor(private calcNotaService: CalculaNotaService) { }

  public calculaMedia(): void {
    this.media = this.calcNotaService.calculaNota(this.nota1, this.nota2, this.nota3);
  }
}
