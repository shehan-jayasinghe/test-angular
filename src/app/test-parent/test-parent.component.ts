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
}
