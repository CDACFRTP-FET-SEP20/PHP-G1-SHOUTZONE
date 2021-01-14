import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { Shout } from '../create-shout/Shout';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoutsService } from '../services/shouts.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shout-feed',
  templateUrl: './shout-feed.component.html',
  styleUrls: ['./shout-feed.component.scss'],
})
export class ShoutFeedComponent implements OnInit {
  userId: number;
  value: any;

  session: any;
  mediaPath: any = 'http://127.0.0.1:8000';

  shoutData: any[];
  constructor(
    private shoutService: ShoutsService,
    private authService: AuthService
  ) {
    this.userId = this.authService.getUserDetails().id;
  }

  ngOnInit(): void {
    this.getLatestFeed(this.userId);
  }

  getLatestFeed(userId: number): void {
    this.shoutService.getFriendsShout(userId).subscribe(
      (data) => {
        this.shoutData = data;
        Object.values(this.shoutData).map((ele) => {
          ele.shoutMedia = `${this.mediaPath}${ele.shoutMedia}`;
        });
        console.log(this.shoutData);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Got all the shout or there might be error');
      }
    );
  }
}
