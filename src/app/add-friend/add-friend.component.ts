import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit {
  people:any;
  user_id: number;
  p:any;
  data: any;
  constructor(private friends:FriendsService) { }

  addFriend(id) {
    console.log("inside Add",id);
    let index  =this.people.findIndex(ele => ele.id === id);
    this.people[index].found = false;

    this.data = {
      user_id : 2, //current logged in user
      reciever:id
    };
    this.friends.sendFriendRequest(this.data).subscribe(
      ()=>{
        console.log("sent Request");
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.user_id = 2; //current logged in user
    //this.people = this.friends.getSuggestionList(this.user_id);
     this.friends.getSuggestionList(this.user_id).subscribe((data)=>{
      this.people = data;

     Object.keys(this.people).map((ele)=> this.people[ele] = {...this.people[ele] , found : true});
     console.log(this.people);

     });





  }

}
