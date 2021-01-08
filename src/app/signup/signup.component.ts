import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  myDate: any;
  registerForm: FormGroup;
  submitted = false;
  user = new User();


  constructor(private service: AuthService, private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {


    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
       username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(7)]),
      //cpassword :new FormControl('',[Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
    }
   
    );
    


  }

  



  userRegister(event) {
     this.submitted = true;
    this.service.registerUserFromRemote(this.user).subscribe(
       (data) => {  
         if (data.status_code === 200) {
           alert("You are Successfully Registerd...You Will be Verified within 24 Hours!!");
         this.router.navigateByUrl('/welcome');
        }
      },
      (err) => { console.log('error in processing request', err) },
      () => {}
    )
      
   
}


// ConfirmedValidator(controlName: string, matchingControlName: string){
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];
//         if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
//             return;
//         }
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ confirmedValidator: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
//}


}
