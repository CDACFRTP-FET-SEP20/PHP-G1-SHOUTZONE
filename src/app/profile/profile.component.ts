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

  session: any;
  mediaPath: any = 'http://127.0.0.1:8000';
  friends: number;
  shouts: number;

  userShout: any;

  constructor(
    private post: ShoutsService,
    private auth: AuthService,
    private userService: UserService,
    private activer: ActivatedRoute,
    private r: Router
  ) {
    this.user_id = this.auth.getUserDetails().id;
    // this.getUserDetails();
    this.userService.getUserDetails(this.user_id).subscribe((res) => {
      this.user = res.user;
      this.friends = res.friends;
      this.shouts = res.shouts;
    });
  }

  ngOnInit(): void {
    this.getUserShouts();
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
