import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  items: Array<any> = [
    {name: 'Nikka from the barrel', description: 'A good japanese whiskey', price: 400},
    {name: 'Ileach', description: 'Some scottish shite', price: 300},
    {name: 'Jim Bean Straight', description: 'American bourbon', price: 250}
  ];

  constructor() { 

  }

  ngOnInit() {
  }

}
