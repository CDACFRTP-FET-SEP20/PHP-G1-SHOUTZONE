import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Report } from './report';
import { AuthService } from '../services/auth.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  report = new Report();
  reportType = ['Abuse', 'Harassment', 'Bully', 'NSFW'];

  constructor(
    public dialogRef: MatDialogRef<ReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private reportService: ReportService
  ) {
    // this.dialogRef.beforeClosed().subscribe(() => this.reportShout());
  }

  ngOnInit(): void {}

  reportShout(): void {
    this.report.userId = this.authService.getUserDetails().id;
    this.data.isReported = true;
    this.report.shoutId = this.data.postId;
    if (this.report.category === null) {
      this.openSnackbar('Please Select a categorty');
      return;
    }
    this.reportService.reportPost(this.report).subscribe(
      (data) => {
        if (data.success === true) {
          this.openSnackbar(data.message);
        } else {
          this.openSnackbar(data.message);
        }
      },
      (err) => {
        this.data.isReported = false;
        this.openSnackbar('Error Occoured');
      }
    );
    this.dialogRef.close(this.data.isReported);
  }

  openSnackbar(message: string): void {
    this._snackBar.open(message, 'Dismiss', {
      duration: 3000,
    });
  }

  noAction(): void {
    this.dialogRef.close();
  }
}
