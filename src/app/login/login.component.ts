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

//   userLogin() {


//     this.service.loginUserFromRemote(this.user).subscribe(
//       (data) => { this.user = data;},
//       (err) => { alert(err) },
//       () => { console.log(this.user) }
//     )

// }

  userLogin() {


    this.service.loginUserFromRemote(this.user).subscribe(
      (data) => {  //console.log("daskjdg");

        console.log(data);

        if (data.status_code === 500){
          alert("please fill valid credentials");
          return;
        }

        if (data.user.is_approved) {
          sessionStorage.setItem('username', data.user.username);
          // sessionStorage.setItem('token', data.token);
          // sessionStorage.setItem('userid', data.user.id);
          this.router.navigateByUrl('/home');
        }
       },
      (err) => { alert(err) },
      () => { console.log(this.user) }
    )

  }



}



