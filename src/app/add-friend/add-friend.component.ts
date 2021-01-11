import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { FriendsService } from '../services/friends.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {
  people: any;
  user: User;
  p: any;
  data: any;

  constructor(
    private friends: FriendsService,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  addFriend(id) {
    console.log('inside Add', id);
    this.user = this.auth.getUserDetails(); //current logged in user

    let index = this.people.findIndex((ele) => ele.id === id);
    this.people[index].found = false;

    this.data = {
      user_id: this.user.id, //current logged in user
      reciever: id,
    };
    this.friends.sendFriendRequest(this.data).subscribe(
      () => {
        console.log('sent Request');
        this._snackBar.open(
          `Friend Request has been sent to ${this.people[index].username} `,
          'Dismiss',
          {
            duration: 2000,
          }
        );

        this.userList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  userList() {
    this.user = this.auth.getUserDetails(); //current logged in user

    console.log(this.user.id);

    //this.people = this.friends.getSuggestionList(this.user_id);
    this.friends.getSuggestionList(this.user.id).subscribe((data) => {
      this.people = data;

      Object.keys(this.people).map(
        (ele) => (this.people[ele] = { ...this.people[ele], found: true })
      );
      console.log(this.people);
    });
  }

  ngOnInit(): void {
    this.userList();
  }
}
