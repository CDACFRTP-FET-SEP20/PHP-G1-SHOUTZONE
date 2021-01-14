import { Component, OnInit } from '@angular/core';
import { Shout } from './Shout';
import { NgForm } from '@angular/forms';
import { ShoutsService } from '../services/shouts.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-shout',
  templateUrl: './create-shout.component.html',
  styleUrls: ['./create-shout.component.scss'],
})
export class CreateShoutComponent implements OnInit {
  shout = new Shout();
  postedShout: any;
  flag: boolean = true;
  userId: number;

  constructor(
    private postservice: ShoutsService,
    private authService: AuthService
  ) {
    this.userId = this.authService.getUserDetails().id;
  }
  ngOnInit(): void {}
  inputChange(event: any) {
    if (event.target.value !== '') {
      this.flag = null;
    }
  }
  uploadShout(event: any) {
    console.log(this.flag);
    this.flag = null;
    console.log(this.flag);
    this.shout.shoutMedia = event.target.files[0];
    var shoutType = this.shout.shoutMedia.type;
    console.log(shoutType);
    if (shoutType.includes('image')) {
      // this.flag = true;
      this.shout.shoutType = 'image';
    } else if (shoutType.includes('video')) {
      // this.flag = true;
      this.shout.shoutType = 'video';
    } else if (shoutType.includes('audio')) {
      // this.flag = true;
      this.shout.shoutType = 'audio';
    } else this.shout.shoutType = null;
  }

  formSubmit(form: NgForm) {
    this.postservice.addShout(this.shout, this.userId).subscribe((Response) => {
      console.log(Response);
      this.shout.shoutMedia = null;
      this.shout.shoutType = null;
      this.shout.shoutText = null;
    });
    form.reset();
    alert('Shout updated successfully!!!');
  }
}
