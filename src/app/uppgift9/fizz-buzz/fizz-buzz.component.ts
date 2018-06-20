import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {

  @Input() startnum: number = 0;
  @Input() endnum: number = 100;
  @Input() fizznum: number = 3;
  @Input() buzznum: number = 4;

  result: string;

  constructor() { }

  ngOnInit() {
  }

  fizzbuzz(){

    console.log(this.startnum);
    console.log(this.endnum);
    console.log(this.fizznum);
    console.log(this.buzznum);
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
