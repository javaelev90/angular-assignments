import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // With this encapsulation you can define tooltip css in your component css
  encapsulation: ViewEncapsulation.None,
})
export class ItemComponent implements OnInit {

  @Input() name: String ='Nikka from the barrel';
  @Input() description: String = 'A good japanese whiskey';
  @Input() price: Number = 400;

  constructor() {}

  ngOnInit() {}

}
