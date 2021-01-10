import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss'],
})
export class FriendRequestComponent implements OnInit {
  friends = [
    { name: 'amey' },
    { name: 'adsfasdf' },
    { name: 'adsfasdf' },
    { name: 'adsfasdf' },
    { name: 'adsfasdf' },
    { name: 'adsfasdf' },
    { name: 'adsfasdf' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
