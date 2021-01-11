import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Shout } from '../create-shout/Shout';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoutsService } from '../services/shouts.service';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;
  user_id: any;
  value: any;


  session: any;
  mediaPath: any = 'http://127.0.0.1:8000';

  userShout: any;

  constructor(
    private post: ShoutsService,
    private auth: AuthService,
    private activer: ActivatedRoute,
    private r: Router
  ) {}

  ngOnInit(): void {
    //sessionStorage.setItem('user_id', '12');
    //this.session = sessionStorage.getItem('user_id');
    this.user = this.auth.getUserDetails();
    this.userShout = this.post.getShoutsById(this.user.id);
    this.post.getShoutsById(this.user.id).subscribe(
      (data) => {
        console.log(data);
        this.userShout = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteOwnShout(id: number) {
    this.post.deleteOwnShout(id).subscribe((data) => {
      console.log('data' + data);
      window.alert('Deleted Successfully');
      this.ngOnInit();
    });
  }
}
