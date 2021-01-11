import { Component, OnInit } from '@angular/core';
import { faImages, faVideo, faMusic } from '@fortawesome/free-solid-svg-icons';
import {Shout} from './Shout';
import { NgForm } from "@angular/forms";
import{ShoutsService} from '../services/shouts.service';

@Component({
  selector: 'app-create-shout',
  templateUrl: './create-shout.component.html',
  styleUrls: ['./create-shout.component.scss'],
})
export class CreateShoutComponent implements OnInit {
  faImages = faImages;
  faVideo = faVideo;
  faMusic = faMusic;
  shout=new Shout();
  postedShout: any;
  flag: boolean = true;

  constructor(private postservice: ShoutsService) {}
  ngOnInit(): void {
    sessionStorage.getItem('user_id');
  }
  uploadShout(event:any) {
    this.flag = false;
    this.shout.shoutMedia = event.target.files[0];
    var shoutType = this.shout.shoutMedia.type;
    console.log(shoutType);
    if (shoutType.includes("image")) {
      this.flag = true;
      this.shout.shoutType = "image";
    } else if (shoutType.includes("video")) {
      this.flag = true;
      this.shout.shoutType = "video";
    } else if (shoutType.includes("audio")) {
      this.flag = true;
      this.shout.shoutType = "audio";
    }
     else this.shout.shoutType = null;
  }

  formSubmit(form: NgForm) {

    this.postservice.addShout(this.shout, sessionStorage.getItem('user_id')).subscribe((Response) => {
      console.log(Response);
      this.shout.shoutMedia = null;
    this.shout.shoutType = null;
    this.shout.shoutText = null;



    });
}

}
