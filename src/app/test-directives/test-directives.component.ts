import { Component } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-test-directives',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    NgIf
  ],
  templateUrl: './test-directives.component.html',
  styleUrl: './test-directives.component.css'
})
export class TestDirectivesComponent {
 items: string[] = ['Item 1', 'Item 2', 'Item 3'];
 color: string ="red";
  isVisible:boolean = true;
}
