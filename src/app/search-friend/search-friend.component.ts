import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/friends.service';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html',
  styleUrls: ['./search-friend.component.scss'],
})
export class SearchFriendComponent implements OnInit {
  user: any;
  people: any;
  data: {
    user_id: any; //current logged in user
    reciever: any;
  };
  keyword: string;

  toShow: any;
  constructor(
    private friends: FriendsService,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  addFriend(id) {
    this.user = this.auth.getUserDetails(); //current logged in user

    let index = this.people.findIndex((ele) => ele.id === id);
    this.people[index].found = false;

    this.data = {
      user_id: this.user.id, //current logged in user
      reciever: id,
    };
    this.friends.sendFriendRequest(this.data).subscribe(
      () => {
        this._snackBar.open(
          `Friend Request has been sent to ${this.people[index].username} `,
          'Dismiss',
          {
            duration: 2000,
          }
        );

        this.userList();
      },
      (error) => {}
    );
  }

  userList() {
    this.user = this.auth.getUserDetails(); //current logged in user

    //this.people = this.friends.getSuggestionList(this.user_id);
    this.friends.getSuggestionList(this.user.id).subscribe((data) => {
      this.people = data;
      this.toShow = data.length;

      Object.keys(this.people).map(
        (ele) => (this.people[ele] = { ...this.people[ele], found: true })
      );
    });
  }

  ngOnInit(): void {
    this.userList();
  }
}
