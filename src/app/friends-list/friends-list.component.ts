import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  friendlist: Observable<any>;
  user_id: number;
  data: any;
  user: User;
  constructor(private friends: FriendsService, private auth: AuthService) {}

  removeFriend(id) {
    this.user = this.auth.getUserDetails(); //current logged in user
    console.log('inside Remove', id);
    this.data = {
      user_id: this.user.id, //current logged in user
      id: id,
    };
    this.friends.removeFriend(this.data).subscribe(
      () => {
        console.log('Friend Removed');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    console.log('inside FriendList');
    this.user = this.auth.getUserDetails(); //current logged in user
    this.friends.friendList(this.user.id).subscribe((data) => {
      this.friendlist = data;
      console.log(this.friendlist);
    });
  }
}
