import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  @Input() user: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.user);
  }
}
