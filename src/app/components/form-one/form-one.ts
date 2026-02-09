import { Component, inject } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  imports: [ReactiveFormsModule],
  templateUrl: './form-one.html',
  styleUrl: './form-one.scss',
})
export class FormOne {


  // profileForm = new FormGroup({
  //   name: new FormControl('Pippo'),
  //   surname: new FormControl('de pippis'),
  //   adress: new FormGroup({
  //     city: new FormControl('Gotham City'),
  //     country: new FormControl('Usa'),
  //     number: new FormControl('12'),
  //   })
  // });
  fb = inject(FormBuilder);
  profileForm = this.fb.group({
    name: ['Pippo', Validators.required],
    surname: ['de pippis', Validators.required],
    adress: this.fb.group({
      city: ['Gotham City'],
      country: ['Usa'],
      number: [12, [Validators.required, Validators.min(1)]],
    }),
    aliases: this.fb.array([this.fb.control('')])
  });


  onSubmit() {
    console.log(this.profileForm.value);
  }
  getAliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.getAliases().push(this.fb.control(''));
  }
  removeAlias(index: number) {
    this.getAliases().removeAt(index);
  }

}

