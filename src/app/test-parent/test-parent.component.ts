import {Component, Input} from '@angular/core';
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
  receiveMessage(message: string) {
    this.message = message;
  }

  search($event: string) {
    this.filteredItems = this.parentItems.filter(item => item === $event);
  }
}
