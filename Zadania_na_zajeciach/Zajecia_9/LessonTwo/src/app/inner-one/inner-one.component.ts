import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner-one',
  templateUrl: './inner-one.component.html',
  styleUrls: ['./inner-one.component.css']
})

export class InnerOneComponent {
  @Input() receivedFromTwo: String;
  @Output() private outOne: EventEmitter<String> = new EventEmitter();
  sendText(fromOne: String): void {
    this.outOne.emit(fromOne);
  }
}
