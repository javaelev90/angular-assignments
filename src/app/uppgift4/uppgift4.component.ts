import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-uppgift4',
  templateUrl: './uppgift4.component.html',
  styleUrls: ['./uppgift4.component.css']
})
export class Uppgift4Component implements OnInit {

  activeTab: String = "Whiskey";
  navButtons = [
    {name: "Whiskey"},
    {name: "Wine"},
    {name: "Beer"}
  ];
  
  @Input() tabOpen: String = "Whiskey";
  constructor() { }

  ngOnInit() {
  }
  setActiveTab(name){
    this.activeTab = name;
  }
}
