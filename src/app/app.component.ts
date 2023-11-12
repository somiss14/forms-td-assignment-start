import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  defaultAdvLevel = 'advanced';
  submitted = false;

  userForm = {
    email: '',
    password: '',
    advLevel: ''
  };
  onSubmit() {
    this.submitted = true;

    this.userForm.email = this.signupForm.value.email;
    this.userForm.password = this.signupForm.value.password;
    this.userForm.advLevel = this.signupForm.value.advanceLevel;

    console.log(this.userForm);
  }
}
