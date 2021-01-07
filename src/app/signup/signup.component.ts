import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  myDate: any;

  registerForm: FormGroup;
  submitted = false;
  user = new User();

  constructor(
    private service: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      confirm_password: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  userRegister() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.service.registerUserFromRemote(this.user).subscribe(
        (data) => {
          this.user = data;
        },
        (err) => {
          console.log('error in processing request', err);
        },
        () => {
          console.log(this.user);
        }
      );
    }
  }
}
