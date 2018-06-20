import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-catcher',
  templateUrl: './click-catcher.component.html',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  styleUrls: ['./click-catcher.component.css']
})
export class ClickCatcherComponent implements OnInit {

  clickCounter: number = 0;
  constructor() { }

  ngOnInit() {
  }

  handleClick($event){
    this.clickCounter++;
  }

}
