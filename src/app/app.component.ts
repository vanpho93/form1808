import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formSignIn: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formSignIn = this.fb.group({
      email: 'vanpho01@gmail.com',
      password: '123'
    });
  }

  onSignIn() {
    console.log(this.formSignIn.value);
  }
}
