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
  console.log(this.name);
  console.log(this.surname);
  console.log(this.age);
}
  name: string = 'paperino';
look() {
  
}
changeName() {
  this.name = 'paperinik';
}
}
