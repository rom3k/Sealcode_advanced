import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner-two',
  templateUrl: './inner-two.component.html',
  styleUrls: ['./inner-two.component.css']
})

export class InnerTwoComponent {
  @Input() receivedFromOne: String;
  @Output() private outTwo: EventEmitter<String> = new EventEmitter();

  sendText(fromTwo: String): void {
    this.outTwo.emit(fromTwo);
  }
  constructor() { }
}
