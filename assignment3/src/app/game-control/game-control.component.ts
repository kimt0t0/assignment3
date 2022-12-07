import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  counter = 0;
  cInterval: any;

  startGame() {
    this.cInterval = setInterval(() => {
      console.log("Counter: ", this.counter);
      return this.counter += 1;
    }, 1000);
    console.log("Game started");
  }

  stopGame() {
    clearInterval(this.cInterval);
    this.cInterval = null;
    this.counter = 0;
    console.log("Game stopped");
  }

}
