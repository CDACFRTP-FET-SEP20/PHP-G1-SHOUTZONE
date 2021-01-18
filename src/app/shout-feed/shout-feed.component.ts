import { Component, OnInit } from '@angular/core';
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
  toShow: boolean = false;
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
        if (this.shoutData.length > 0) {
          this.toShow = true;
        }

        Object.values(this.shoutData).map((ele) => {
          ele.shoutMedia = `${this.mediaPath}${ele.shoutMedia}`;
        });
      },
      (err) => {},
      () => {}
    );
  }
}
