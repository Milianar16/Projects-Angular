import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepFind } from './interfaces/Cep-find';
import { CepApiService } from './services/cep-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cepForm: FormGroup = this.fb.group({
    cep: ['', [Validators.required]]
  })


  cepF!: CepFind

  constructor(
    private fb: FormBuilder,
    private cepService: CepApiService
  ){}

  buscar(){
    const cep = this.cepForm.get('cep')?.value

    this.cepService.procurarCep(cep).subscribe((find) => {

      this.cepF = find
      console.log(cep)
      console.log(this.cepF)
    })
  }
}