import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formSignIn: FormGroup;

  constructor() {
    this.formSignIn = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSignIn() {
    console.log(this.formSignIn.value);
  }
}
