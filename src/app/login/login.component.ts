import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
 import { User } from '../model/user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();
  loginForm: FormGroup;


  submitted =false;

  constructor(private service: AuthService, private router: Router) { }



  ngOnInit() :void {

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.maxLength(6)]),
    })


}

  userLogin() {


    this.service.loginUserFromRemote(this.user).subscribe(
      (data) => { this.user = data},
      (err) => { console.log('error in processing request', err) },
      () => { console.log(this.user) }
    )
}



}



