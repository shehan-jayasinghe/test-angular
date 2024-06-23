import {Component, Input, ViewChild} from '@angular/core';
import {TestChildComponent} from "./test-child/test-child.component";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-test-parent',
  standalone: true,
  imports: [
    TestChildComponent,
    FormsModule
  ],
  templateUrl: './test-parent.component.html',
  styleUrl: './test-parent.component.css'
})
export class TestParentComponent {
  @Input() childProperty: string | undefined;
  parentMessage: string ="";
  message: string="";
  parentItems:string[] = ["Item 1", "Item 2", "Item 3"];
  filteredItems: string[] = this.parentItems;
  @ViewChild(TestChildComponent, { static: true }) testChildComponent: TestChildComponent | undefined;

  receiveMessage(message: string):void {
    this.message = message;
  }

  search($event: string):void {
    this.filteredItems = this.parentItems.filter(item => item === $event);
  }

  callChildMethod():void {
    this?.testChildComponent?.childMethod();
  }
}
