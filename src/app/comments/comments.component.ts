import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { ShoutsService } from '../services/shouts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: any;
  user: User;
  inputComment: string;
  myDate: any;
  constructor(
    public dialogRef: MatDialogRef<CommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shout: ShoutsService,
    private auth: AuthService
  ) {}

  listComments() {
    this.shout.getComments(this.data.postId).subscribe((data) => {
      console.log(data);

      this.comments = data;
    });
  }

  // deleteComment(){
  //   this.user=this.auth.getUserDetails();
  //   if(this.data.postId)
  // }

  postComment() {
    if (this.inputComment != null) {
      console.log('In Store', this.data.postId);

      this.user = this.auth.getUserDetails(); //current logged in user
      let data = {
        shout_id: this.data.postId,
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

    console.log(this.data.postId);
    this.listComments();
  }
}
