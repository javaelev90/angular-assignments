import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent implements OnInit {

  inputString: String = "";

  constructor() { }

  ngOnInit() {
  }

  reverseString(string: String): String{
    return string.split('').reverse().join('');
  }
}
