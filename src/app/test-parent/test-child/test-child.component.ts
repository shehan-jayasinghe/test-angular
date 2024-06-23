import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-test-child',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.css'
})
export class TestChildComponent {
  @Input() childMessage: string | undefined;
  @Input() childItems: string[] | undefined
  @Output() messageEvent = new EventEmitter<string>();
  @Output() childInputMessageEvent = new EventEmitter<string>();
  childInput: string="";
  condition: boolean = true;
  sendMessage() {
    this.messageEvent.emit('Hello from the Child Component!');
  }

  search() {
    this.childInputMessageEvent.emit(this.childInput)
  }

  childMethod() {
    console.log('Child method called');
  }
}
