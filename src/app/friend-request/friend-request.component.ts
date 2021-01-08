import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {
  requestList:Observable<any>
  user_id: number;
  data: any

  constructor(private friends:FriendsService) { }

  acceptRequest(id){
    console.log("inside Accept",id);
   // let index  =this.people.findIndex(ele => ele.id === id);
   // this.people[index].found = false;
    this.data = {
      user_id : 1, //current logged in user
      sender:id
    };
    this.friends.acceptFriendRequest(this.data).subscribe(
      ()=>{
        console.log("sent Request");
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  deleteRequest(id) {
    console.log("inside Delete",id);
     this.data = {
       user_id : 1, //current logged in user
       id:id
     };
     this.friends.deleteFriendRequest(this.data).subscribe(
       ()=>{
         console.log("Request Removed");
       },
       (error)=>{
         console.log(error);
       }
     );

  }

  ngOnInit(): void {
    console.log("inside FriendList");
    this.user_id = 1; //current logged in user
     this.friends.getRequestList(this.user_id).subscribe((data)=>{
       this.requestList = data;
       console.log(this.requestList);
     });

  }


}
