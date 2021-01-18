import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Shout } from '../create-shout/Shout';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoutsService } from '../services/shouts.service';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  user_id: any;
  value: any;
  isLoggedInUser: boolean = false;
  session: any;
  mediaPath: any = 'http://127.0.0.1:8000';
  friends: number;
  shouts: number;

  userShout: any;

  constructor(
    private post: ShoutsService,
    private auth: AuthService,
    private userService: UserService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.user_id);
    // this.getUserDetails();
    this.activedRoute.params.subscribe((data) => {
      console.log(data);
      this.user_id = data.id;
    });
    this.userService.getUserDetails(this.user_id).subscribe((res) => {
      this.user = res.user;
      this.friends = res.friends;
      this.shouts = res.shouts;
    });
  }

  ngOnInit(): void {
    this.getUserShouts();
    if (this.auth.getUserDetails().id == this.user_id) {
      this.isLoggedInUser = true;
    }
  }

  getUserShouts() {
    this.post.getShoutsById(this.user_id).subscribe(
      (data) => {
        this.userShout = data;
      },
      (error) => {}
    );
  }

  deleteOwnShout(id: number): void {
    this.post.deleteOwnShout(id).subscribe((data) => {
      window.alert('Deleted Successfully');
      this.getUserShouts();
    });
  }
}
