import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-test-directives',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './test-directives.component.html',
  styleUrl: './test-directives.component.css'
})
export class TestDirectivesComponent {
 items: string[] = ['Item 1', 'Item 2', 'Item 3']
}
