import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss'],
})
export class FriendRequestComponent implements OnInit {
  requestList: any;
  keyword: string;
  user: User;
  data: any;

  constructor(
    private friends: FriendsService,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  acceptRequest(id) {
    this.user = this.auth.getUserDetails();
    let index = this.requestList.findIndex((ele) => ele.id === id);
    this.data = {
      user_id: this.user.id, //current logged in user
      sender: id,
    };
    this.friends.acceptFriendRequest(this.data).subscribe(
      () => {
        this.requests();
        this._snackBar.open(
          `You are now friend with ${this.requestList[index].username} !!!`,
          'Dismiss',
          {
            duration: 2000,
          }
        );
      },
      (error) => {}
    );
  }

  deleteRequest(id) {
    this.user = this.auth.getUserDetails();
    this.data = {
      user_id: this.user.id, //current logged in user
      id: id,
    };

    this.friends.deleteFriendRequest(this.data).subscribe(
      () => {
        this._snackBar.open(`Request is Removed !!!`, 'Dismiss', {
          duration: 2000,
        });
        this.requests();
      },
      (error) => {}
    );
  }

  requests() {
    this.requestList;
    this.user = this.auth.getUserDetails();
    this.friends.getRequestList(this.user.id).subscribe((data) => {
      if (data.length > 0) {
        this.requestList = data;
      } else {
        this.requestList = null;
      }
    });
  }

  ngOnInit(): void {
    this.requests();
  }
}
