import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { NavbuttonComponent } from './navbutton/navbutton.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navButtons = [
    {name: "Uppgift1", link: "uppgift1"},
    {name: "Uppgift2", link: "uppgift2"},
    {name: "Uppgift3", link: "uppgift3"},
    {name: "Uppgift4", link: "uppgift4"},
    {name: "Uppgift5", link: "uppgift5"},
    {name: "Uppgift6", link: "uppgift6"},
    {name: "Uppgift7", link: "uppgift7"},
    {name: "Uppgift8", link: "uppgift8"},
    {name: "Uppgift9", link: "uppgift9"}
  ];
  

  constructor() {
    
   }

  ngOnInit() {
  }

  
}
