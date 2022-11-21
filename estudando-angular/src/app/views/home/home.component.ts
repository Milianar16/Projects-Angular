import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { // construtor sempre é chamado quando é criado uma classe
    setTimeout(()=>{
      this.objStyle['color']='blue';
    },5000)
    
     
   }

  public user: string = "Miliana Rocha";

  public image: any = {
    source: "https://avatars.githubusercontent.com/u/113555082?v=4",
    alternative: "Avatar Miliana Rocha"
  };

  public clicar(): void {
    alert("Clicou!");
  }
 public objStyle:any={
  'font-size':'100px',
  'color': 'pink'
 }
 
 public isError:boolean =false;
 public classCor:string ="pink";

 public sapinho: boolean = true;
  public mudarSapinho(): void {
    this.sapinho = !this.sapinho;
  }

 public peixes: string[]=[
  "tubarão",
  "polvo",
  "peixe palhaço",
  "baicu",
  "cavalo-marinho",
  "lula",
  "carpa"
 ];

 
 public textoPipe: string ="Texto de Exemplo(pipe)";
 public numberPipe:number =30.3334 ;
 public nowPipe= new Date();
 public objProfPipe={
  nome:"Miliana",
  idade:28,
  area:"Tecnologia"
 }


}


