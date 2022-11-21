import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PontoDeChurro } from 'src/app/models/ponto-de-churro';
import { LocaleService } from 'src/app/services/locale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pontosDeChurros: PontoDeChurro[] = [];
  public estadoList: any = [];
  public cidadeList: any = [];

  public isDisabledCidade: boolean = true;

  public form: FormGroup;
  private  localeService: LocaleService;

  constructor(fb: FormBuilder, localeService: LocaleService) {
    this.form = fb.group({
      nome: ["", [Validators.required]],
      estado: ["", [Validators.required]],
      cidade: ["", [Validators.required]],
      localizacao: ["", [Validators.required]],
      comeca: ["", [Validators.required]],
      termina: ["", [Validators.required]]
    });
    this.localeService = localeService;
  }

  ngOnInit(): void {
    this.initializeFieldEstado();
  }

  initializeFieldEstado(): void {
    this.localeService.findAllEstado().subscribe(estados => {
      this.estadoList = estados;
    });
  }

  initializeFieldCidade(estado: number): void {
    this.isDisabledCidade = false;
    this.localeService.findCidadesByEstado(estado).subscribe(cidades => {
      this.cidadeList = cidades;
    });
  }

  public onSubmit(): void {
    if(this.form.valid) {
      let pontoDeChurro: PontoDeChurro = this.form.value;
      this.pontosDeChurros.push(pontoDeChurro);
    }
    else {
      window.alert("Dados inválidos.");
    }
  }
}
