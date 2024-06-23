import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-test-child',
  standalone: true,
  imports: [],
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.css'
})
export class TestChildComponent {
  @Input() childMessage: string | undefined;
}
