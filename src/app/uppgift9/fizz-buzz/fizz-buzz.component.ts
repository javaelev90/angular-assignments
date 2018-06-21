import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {

  startnum: number = 0;
  endnum: number = 100;
  fizznum: number = 3;
  buzznum: number = 4;

  result: string;

  constructor() { }

  ngOnInit() {
  }

  fizzbuzz(){

    if(isNaN(this.startnum) || isNaN(this.endnum) || isNaN(this.fizznum) || isNaN(this.buzznum)){
        alert("You can only input numbers");
        return;
    }

    if((this.startnum == null)|| (this.endnum == null) || (this.fizznum == null) || (this.buzznum == null)){
      alert("You can't leave any field empty.");
      return;
    }

    this.result="";
    let word: string = "";
    for(let i:number = this.startnum; i <= this.endnum; i++){
        word = i+"";
        if(i % this.fizznum === 0){
            word = "Fizz";
        } 
        if(i % this.buzznum === 0){
            word = "Buzz";
        }
        if(i % this.fizznum === 0 && i % this.buzznum === 0){
            word = "FizzBuzz";
        }
        this.result += word+" ";
    }
}

}
