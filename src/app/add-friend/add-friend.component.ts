import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { FriendsService } from '../services/friends.service';

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

  constructor(private friends: FriendsService, private auth: AuthService) {}

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
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
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
}
