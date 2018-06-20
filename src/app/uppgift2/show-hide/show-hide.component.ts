import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.css']
})
export class ShowHideComponent implements OnInit {

  showText: Boolean = false;
  buttonText: String = "Hide text";

  constructor() { }

  ngOnInit() {
  }

  toggleText(){
    if(this.showText){
      this.buttonText = "Hide text";
    } else {
      this.buttonText = "Show text";
    }
    this.showText = !this.showText;
  }
}
