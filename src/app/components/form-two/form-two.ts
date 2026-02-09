import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  imports: [FormsModule],
  templateUrl: './form-two.html',
  styleUrl: './form-two.scss',
})
export class FormTwo {
surname: any;
age: any;
submit() {

}
  name: string = 'paperino';
look() {
  console.log(this.name);
}
changeName() {
  this.name = 'paperinik';
}
}
