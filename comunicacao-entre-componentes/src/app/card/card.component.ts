import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  banner: string ='https://images.unsplash.com/photo-1665591239163-848a79a758e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  
  @Input()
  titulo:string = ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  
  @Input()
  username:string = 'Miliana Rocha'
  
  @Input()
  userFoto: string = 'https://images.unsplash.com/photo-1664801819763-01b6c3f10f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

  @Input()
  corBtn:string ='black'
  
  constructor() { }

  ngOnInit(): void {
  }

}
