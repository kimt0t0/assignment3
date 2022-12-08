import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent {
  @Output('intervalStarted') intervalStarted = new EventEmitter<number>();
  @Output('intervalStopped') intervalStopped = new EventEmitter<number>();
  counter = 0;
  cInterval: any;

  ngOnInit() {}

  onStartGame() {
    this.cInterval = setInterval(() => {
      this.intervalStarted.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }

  onStopGame() {
    this.intervalStopped.emit(this.counter);
  }

}
