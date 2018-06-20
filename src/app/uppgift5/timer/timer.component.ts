import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  clock = 10;
  clockToggle: boolean = true; 
  countDown: Subscription;
  buttonText: string = "Stop";
  
  constructor() {
    this.countDown = this.startInterval(1000);
  }

  ngOnInit() {
  }

  startInterval(time: number): Subscription {
    return interval(time).subscribe(() => {
      if(this.clock > 0){
        --this.clock;
      }
    });
  }

  stopTimer(){
    if(this.clockToggle){
      this.countDown.unsubscribe();
      this.clockToggle = !this.clockToggle;
      this.buttonText = "Start";
    } else {
      this.countDown = this.startInterval(1000);
      this.clockToggle = !this.clockToggle;
      this.buttonText = "Stop";
    }
    
  }
}
