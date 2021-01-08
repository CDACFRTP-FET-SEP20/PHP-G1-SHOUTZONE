import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-shout',
  templateUrl: './shout.component.html',
  styleUrls: ['./shout.component.scss']
})
export class ShoutComponent implements OnInit {

  faLike = faThumbsUp
  constructor() { }

  ngOnInit(): void {
  }

}
