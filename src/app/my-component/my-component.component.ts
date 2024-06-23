import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  title :string = 'test may app';
  protected readonly name:string = '0';
  newNumber: number = 1;
  names: string = "string";
  onClick(){
    console.log(this.newNumber)
    this.newNumber+=1;
  };

}
