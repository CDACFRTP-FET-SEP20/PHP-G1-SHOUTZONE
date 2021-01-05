import { Component, OnInit } from '@angular/core';
import { faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-shout',
  templateUrl: './create-shout.component.html',
  styleUrls: ['./create-shout.component.scss'],
})
export class CreateShoutComponent implements OnInit {
  faImages = faImages;
  constructor() {}

  ngOnInit(): void {}
  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
  }
}
