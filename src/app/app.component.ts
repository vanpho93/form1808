import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SignInService]
})
export class AppComponent {
  formSignIn: FormGroup;

  constructor(private fb: FormBuilder, private signInService: SignInService) {
    this.formSignIn = this.fb.group({
      email: ['vanpho01@gmail.com', Validators.email],
      password: '123'
    });
  }

  onSignIn() {
    this.signInService.signIn(this.formSignIn.value)
    .then(text => console.log(text));
  }
}
