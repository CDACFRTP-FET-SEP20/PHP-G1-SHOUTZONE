import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {
  user_id: any;
  user: any;
  data: any;

  constructor(private userService: UserService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user_id = this.auth.getUserDetails().id;
    this.getData();
  }

  getData() {
    this.userService.getUserInfoById(this.user_id).subscribe(
      (data) => {
        this.data = data;
        this.user = this.data;
      },
      (err) => { },
      () => { }
    );
  }

  userUpdate(form: NgForm) {
    this.userService.updateData(form, this.user_id).subscribe(
      (data) => {

        // this.user = data;
        alert("Profile Upadted Successfully!!!");
        this.router.navigate(['/home/profile']);

      },
      (err) => { },
      () => { }
    );
  }
}
