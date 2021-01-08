import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
friendlist:Observable<any>
  user_id: number;
  data:any
  constructor(private friends:FriendsService) { }

  removeFriend(id){
    console.log("inside Remove",id);
     this.data = {
       user_id : 1, //current logged in user
       id:id
     };
     this.friends.removeFriend(this.data).subscribe(
       ()=>{
         console.log("Friend Removed");
       },
       (error)=>{
         console.log(error);
       }
     );

  }

  ngOnInit(): void {
    console.log("inside FriendList");
    this.user_id = 1; //current logged in user
     this.friends.friendList(this.user_id).subscribe((data)=>{
       this.friendlist = data;
       console.log(this.friendlist);
     });

  }

}
