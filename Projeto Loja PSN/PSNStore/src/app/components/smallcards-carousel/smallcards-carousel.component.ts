import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smallcards-carousel',
  templateUrl: './smallcards-carousel.component.html',
  styleUrls: ['./smallcards-carousel.component.css']
})
export class SmallcardsCarouselComponent implements OnInit {

  @Input() imageList: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
