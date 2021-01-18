import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AbstractControl } from '@angular/forms';

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
  hide = true;

  constructor(
    private service: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(7),
        ]),
        cpassword: new FormControl('', [
          Validators.required,
          Validators.minLength(7),
        ]),
        gender: new FormControl('', [Validators.required]),
        dob: new FormControl('', [Validators.required]),
      },
      {
        validators: this.MatchPassword,
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  userRegister() {
    this.submitted = true;
    this.myDate = this.datePipe.transform(this.user.dob, 'yyyy-MM-dd');
    this.user.dob = this.myDate;
    this.service.registerUserFromRemote(this.user).subscribe((data) => {
      console.log(data.status_code);

      if (data.status_code === 200) {
        alert(
          'You are Successfully Registerd...You Will be Verified within 24 Hours!!');
        this.router.navigateByUrl('/welcome');
      }

      if (data.status_code === 300) {
        alert(
          'Email and Username already exits!!!');
        window.location.reload();
      }
    });
  }

  MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value;
    if (AC.get('cpassword').touched || AC.get('cpassword').dirty) {
      let verifyPassword = AC.get('cpassword').value;

      if (password != verifyPassword) {
        AC.get('cpassword').setErrors({ MatchPassword: true });
      } else {
        return null;
      }
    }
  }
}
