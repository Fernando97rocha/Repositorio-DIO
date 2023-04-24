import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  bigCardImage: string = ''
  @Input()
  bigCardTitle: string = ''
  @Input()
  bigCardDescription: string = ''
  @Input()
  Id: string = '0'
  constructor() { }

  ngOnInit(): void {
  }

}
