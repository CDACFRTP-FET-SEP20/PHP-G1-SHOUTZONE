import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Shout} from '../create-shout/Shout';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import{ShoutsService} from '../services/shouts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = {
    username: 'amey khaire',
    friends: 89,
    shouts: 78,
  };
  user_id:any;
  value:any;

session:any;
  mediaPath:any='http://127.0.0.1:8000';

userShout:any;


  constructor(private post: ShoutsService,private activer:ActivatedRoute,private r:Router) {

  }


  ngOnInit(): void {
    this.getShouts();
  }

  getShouts(){
    sessionStorage.setItem('user_id','2');
    this.session=sessionStorage.getItem('user_id');
    console.log(this.session);
   this.userShout=this.post.getShoutsById(this.session);
    console.log(this.userShout);
  }
  deleteOwnShout(id:number)
  {

      this.post.deleteOwnShout(id).subscribe(data=>{
      console.log("data"+data);
      window.alert('Deleted Successfully');
    });
    this.getShouts();
  }

}



