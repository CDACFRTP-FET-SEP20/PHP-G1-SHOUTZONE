import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss'],
})
export class FriendRequestComponent implements OnInit {
  requestList: Observable<any>;
  user: User;
  data: any;

  constructor(private friends: FriendsService, private auth: AuthService) {}

  acceptRequest(id) {
    this.user = this.auth.getUserDetails();
    console.log('inside Accept', id);
    // let index  =this.people.findIndex(ele => ele.id === id);
    // this.people[index].found = false;
    this.data = {
      user_id: this.user.id, //current logged in user
      sender: id,
    };
    this.friends.acceptFriendRequest(this.data).subscribe(
      () => {
        console.log('sent Request');
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
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    console.log('inside FriendList');
    this.user = this.auth.getUserDetails();
    this.friends.getRequestList(this.user.id).subscribe((data) => {
      this.requestList = data;
      console.log(this.requestList);
    });
  }
}
