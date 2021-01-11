import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import {Shout} from '../create-shout/Shout';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import{ShoutsService} from '../services/shouts.service';

@Component({
  selector: 'app-shout-feed',
  templateUrl: './shout-feed.component.html',
  styleUrls: ['./shout-feed.component.scss'],
})
export class ShoutFeedComponent implements OnInit {

  user_id:any;
  value:any;

session:any;
  mediaPath:any='http://127.0.0.1:8000';

userShout:any;

 data: Observable<any>;
  constructor(private post: ShoutsService,private activer:ActivatedRoute,private r:Router) {
   this.data = this.post.getData();

  }


  ngOnInit(): void {


  }


}


