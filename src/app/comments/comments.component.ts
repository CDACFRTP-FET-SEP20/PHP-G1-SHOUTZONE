import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { ShoutsService } from '../services/shouts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: any[];
  user: User;
  inputComment: string;
  myDate: any;
  showDeleteBtn: boolean;
  constructor(
    public dialogRef: MatDialogRef<CommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shout: ShoutsService,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  listComments() {
    // this.showDeleteBtn = false;
    this.shout.getComments(this.data.shout.id).subscribe((data) => {
      this.comments = data;
      Object.keys(this.comments).map((ele) => {
        this.comments[ele] = {
          ...this.comments[ele],
          delete:
            this.comments[ele].user_id === this.user.id
              ? true
              : this.data.shout.user_id === this.user.id,
        };
      });
      console.log(this.comments);
    });
  }

  deleteComment(id) {
    console.log('Comment_ID', id);

    let index = this.comments.findIndex((ele) => ele.id === id);
    let comment_id = this.comments[index].id;
    this.shout.deleteComment(comment_id).subscribe(() => {
      console.log('Comment Deleted ', comment_id);
      this._snackBar.open(`Comment Deleted Successfully !!!`, 'Dismiss', {
        duration: 2000,
      });
      this.listComments();
    });
  }

  postComment() {
    if (this.inputComment != null) {
      console.log('In Store', this.data.shout.id);

      let data = {
        shout_id: this.data.shout.id,
        id: this.user.id,
        comment: this.inputComment,
      };
      this.shout.storeComment(data).subscribe((data) => {
        this.inputComment = '';
        console.log('post done');

        this.listComments();
      });
    }
  }

  ngOnInit(): void {
    console.log(this.data);
    this.user = this.auth.getUserDetails(); //current logged in user

    console.log(this.data.shout.id);

    this.listComments();
  }
}
