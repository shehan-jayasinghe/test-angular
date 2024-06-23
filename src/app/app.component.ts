import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyComponentComponent} from "./my-component/my-component.component";
import {TestDirectivesComponent} from "./test-directives/test-directives.component";
import {TestParentComponent} from "./test-parent/test-parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponentComponent, TestDirectivesComponent, TestParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
}
