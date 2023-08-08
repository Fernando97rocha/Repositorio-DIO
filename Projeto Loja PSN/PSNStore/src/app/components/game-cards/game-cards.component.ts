import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent implements OnInit {
  root = '/assets/'
  
  gameCards: any = [
    { id: 1, name: 'jogo1'},
    { id: 2, name: 'jogo2'},
    { id: 3, name: 'jogo3'},
    { id: 4, name: 'jogo4'},
    { id: 5, name: 'jogo5'},
    { id: 6, name: 'jogo6'},
    { id: 7, name: 'jogo7'},
    { id: 8, name: 'jogo8'}
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
