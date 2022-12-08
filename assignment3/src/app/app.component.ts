import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameElements: string[] = [];

  onIntervalStopped(stoppedNumber: number) {
    if (stoppedNumber % 2 == 0 || stoppedNumber == 0) {
      this.gameElements.push("even");
    }
    else {
      this.gameElements.push("odd");
    }
  }
}
