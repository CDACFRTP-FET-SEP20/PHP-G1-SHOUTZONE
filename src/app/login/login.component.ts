import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
 import { User } from '../model/user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';




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
      password: new FormControl('', [Validators.required,Validators.minLength(7)]),
    })


}

  userLogin() {


    this.service.loginUserFromRemote(this.user).subscribe(
      (data) => {

        // console.log(data.status_code);
          data.status_code!= Number

        switch (data.status_code) {
          case 500:
            alert("please fill valid credentials");

            break;
          case 405:
            alert("You are Successfully Registerd...You Will be Verified within 24 Hours!!");
            break;
          case 300:
            alert("please fill valid credentials for Users");
            break;
         case 200:
            sessionStorage.setItem('username', data.user.username);
            sessionStorage.setItem('user', data.user);
           // sessionStorage.setItem('token', data.token);
           // sessionStorage.setItem('userid', data.user.id);
          this.router.navigateByUrl('/home');
            break;
            default:
            break;
        }
       },
      (err) => { alert(err) },
      () => { }
    )

  }



}



