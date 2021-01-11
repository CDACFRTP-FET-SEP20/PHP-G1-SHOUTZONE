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
  user: User;
  data: any;

  constructor(
    private friends: FriendsService,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  acceptRequest(id) {
    this.user = this.auth.getUserDetails();
    console.log('inside Accept', id);
    let index = this.requestList.findIndex((ele) => ele.id === id);
    this.data = {
      user_id: this.user.id, //current logged in user
      sender: id,
    };
    this.friends.acceptFriendRequest(this.data).subscribe(
      () => {
        console.log('sent Request');
        this.requests();
        this._snackBar.open(
          `You are now friend with ${this.requestList[index].username} !!!`,
          'Dismiss',
          {
            duration: 2000,
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteRequest(id) {
    this.user = this.auth.getUserDetails();
    console.log('inside Delete', id);
    this.data = {
      user_id: this.user.id, //current logged in user
      id: id,
    };

    this.friends.deleteFriendRequest(this.data).subscribe(
      () => {
        console.log('Request Removed');
        this._snackBar.open(`Request is Removed !!!`, 'Dismiss', {
          duration: 2000,
        });
        this.requests();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  requests() {
    console.log('inside FriendList');
    this.user = this.auth.getUserDetails();
    this.friends.getRequestList(this.user.id).subscribe((data) => {
      this.requestList = data;
      console.log(this.requestList);
    });
  }

  ngOnInit(): void {
    this.requests();
  }
}
