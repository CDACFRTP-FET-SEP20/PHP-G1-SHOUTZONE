import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from '../comments/comments.component';
import { ReportComponent } from '../report/report.component';
import { ShoutsService } from '../services/shouts.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    private shoutService: ShoutsService,
    private router: Router
  ) {}

  goToProfile(id) {
    this.router.navigate([`/home/profile/${id}`]);
  }

  ngOnInit(): void {
    this.loggedInUserId = this.authService.getUserDetails().id;
    this.likedByMe();
    this.reportedByMe();
  }

  reportedByMe(): void {
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
    let like = {
      user_id: this.loggedInUserId,
      shout_id: this.shout.id,
    };
    if (this.isLiked) {
      this.shoutService.disLikeShout(like).subscribe((data) => {
        this.isLiked = false;
        this.likeBtnIcon = 'thumb_up';
        this.shout.likes.pop();
      });
    } else {
      this.shoutService.likeShout(like).subscribe((data) => {
        this.isLiked = true;
        this.likeBtnIcon = 'thumb_down';
        this.shout.likes.push({ like });
      });
    }
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
