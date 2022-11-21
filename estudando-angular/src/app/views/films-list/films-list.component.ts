import { Component, OnInit } from '@angular/core';
import { Filme } from 'app/model/filme';

import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  constructor(private filmeService: FilmeService) { }

  public filmes: Filme[] = [];

  ngOnInit(): void {
    this.filmeService.getAll().subscribe(filmes => {
      this.filmes = filmes;
    });
  }
}
