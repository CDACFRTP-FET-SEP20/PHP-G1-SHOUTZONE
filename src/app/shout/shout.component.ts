import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from '../comments/comments.component';
import { ReportComponent } from '../report/report.component';
import { ShoutsService } from '../services/shouts.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shout',
  templateUrl: './shout.component.html',
  styleUrls: ['./shout.component.scss'],
})
export class ShoutComponent implements OnInit {
  @Input() shout: any;
  comments: any;
  likeBtnIcon: string;
  loggedInUserId: number;
  isLiked: boolean;
  reportIcon: string;
  isReported: boolean;
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private shoutService: ShoutsService
  ) {}

  ngOnInit(): void {
    this.loggedInUserId = this.authService.getUserDetails().id;
    this.likedByMe();
    this.reportedByMe();
    console.log('In shout Compo', this.shout);
  }

  reportedByMe(): void {
    console.log(
      'Report',
      this.shout.id,
      this.shout.report.findIndex((ele) => ele.user_id === this.loggedInUserId)
    );
    if (
      this.shout.report.findIndex(
        (ele) => ele.user_id === this.loggedInUserId
      ) > -1
    ) {
      this.reportIcon = 'report_off';
      this.isReported = true;
    } else {
      this.reportIcon = 'report';
      this.isReported = null;
    }
  }

  likedByMe(): void {
    console.log(
      'liked',
      this.shout.id,
      this.shout.likes.findIndex((ele) => ele.user_id === this.loggedInUserId)
    );
    if (
      this.shout.likes.findIndex((ele) => ele.user_id === this.loggedInUserId) >
      -1
    ) {
      this.likeBtnIcon = 'thumb_down';
      this.isLiked = true;
    } else {
      this.likeBtnIcon = 'thumb_up';
      this.isLiked = false;
    }
  }

  likeDislike(): void {
    console.log('This is like dislike');
    let like = {
      user_id: this.loggedInUserId,
      shout_id: this.shout.id,
    };
    if (this.isLiked) {
      console.log('This is Dislike');
      this.shoutService.disLikeShout(like).subscribe(
        (data) => {
          console.log(data);
          this.isLiked = false;
          this.likeBtnIcon = 'thumb_up';
          this.shout.likes.pop();
        },
        (err) => console.log(err),
        () => console.log('Disliked')
      );
    } else {
      console.log('This is like');
      this.shoutService.likeShout(like).subscribe(
        (data) => {
          console.log(data);
          this.isLiked = true;
          this.likeBtnIcon = 'thumb_down';
          this.shout.likes.push({ like });
        },
        (err) => console.log(err),
        () => console.log('Disliked')
      );
    }
  }

  deleteOwnShout() {
    this.shoutService.deleteOwnShout(this.shout.id).subscribe((data) => {
      console.log('data' + data);
      window.alert('Deleted Successfully');
      this.ngOnInit();
    });
  }

  openCommentsDialog(): void {
    const dialogRef = this.dialog.open(CommentsComponent, {
      data: { shout: this.shout, user_id: this.shout.user_id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.comments = result;
    });
  }
  openReportDialog(): void {
    const dialogRef = this.dialog.open(ReportComponent, {
      data: { postId: this.shout.id, isReported: this.isReported },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isReported = result;
      this.reportIcon = 'report_off';
    });
  }
}
