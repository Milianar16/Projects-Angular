import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  constructor() { }

  numero:number =0;


  
  btn_aumentar(){
    this.numero +=1;
  }

  btn_diminuir(){
    this.numero -=1;
  }

  ngOnInit(): void {
  }



}