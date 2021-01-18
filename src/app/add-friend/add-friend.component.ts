import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { FriendsService } from '../services/friends.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {
  people: any;
  user: User;
  data: any;
  toShow: any;

  constructor(
    private friends: FriendsService,
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  goToProfile(id) {
    this.router.navigate([`/home/profile/${id}`]);
  }

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
