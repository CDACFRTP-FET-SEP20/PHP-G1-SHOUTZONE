import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { FriendsService } from '../services/friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  friendlist: any[];
  user_id: number;
  data: any;
  user: User;
  keyword: string;

  constructor(
    private friends: FriendsService,
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.friendlist;
  }

  removeFriend(id) {
    this.user = this.auth.getUserDetails(); //current logged in user
    let index = this.friendlist.findIndex((ele) => ele.id === id);

    this.data = {
      user_id: this.user.id, //current logged in user
      id: id,
    };
    this.friends.removeFriend(this.data).subscribe(
      () => {
        {
          this._snackBar.open(
            ` ${this.friendlist[index].username} has been removed from Friends !!!`,
            'Dismiss',
            {
              duration: 2000,
            }
          );
          this.listFriends();
        }
      },
      (error) => {}
    );
  }

  listFriends() {
    this.user = this.auth.getUserDetails(); //current logged in user
    this.friends.friendList(this.user.id).subscribe((data) => {
      if (data.length > 0) {
        this.friendlist = data;
      } else {
        this.friendlist = null;
      }
    }),
      (error) => {};
  }

  goToProfile(id) {
    this.router.navigate([`/home/profile/${id}`]);
  }

  ngOnInit(): void {
    this.listFriends();
  }
}
