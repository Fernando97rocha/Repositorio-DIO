import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  clickedButtonList: boolean = false
  buttonClassName: string = 'menu-list'

  constructor() { }

  ngOnInit(): void {
  }

  showList() {
    this.buttonClassName = 'mobile-menu-oponed'
    this.clickedButtonList = true
  }

  closeLateralList(){
    this.clickedButtonList = false
    this.buttonClassName = 'menu-list'
  }
}
