import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  receivedFromOne: String;
  receivedFromTwo: String;
  parentToTwo: String;
  parentToOne: String;

  onOutFromOne(received: String): void {
    this.receivedFromOne = received;
    this.parentToTwo = this.receivedFromOne;
  }

  onOutFromTwo(received: String): void {
    this.receivedFromTwo = received;
    this.parentToOne = this.receivedFromTwo;
  }
}
