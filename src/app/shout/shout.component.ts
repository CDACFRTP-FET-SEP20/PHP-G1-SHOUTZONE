import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from '../comments/comments.component';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'app-shout',
  templateUrl: './shout.component.html',
  styleUrls: ['./shout.component.scss'],
})
export class ShoutComponent implements OnInit {
  @Input() postId: number;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openCommentsDialog(): void {
    const dialogRef = this.dialog.open(CommentsComponent, {
      data: { postId: this.postId },
    });
  }
  openReportDialog(): void {
    const dialogRef = this.dialog.open(ReportComponent, {
      data: { postId: this.postId },
    });
  }
}
