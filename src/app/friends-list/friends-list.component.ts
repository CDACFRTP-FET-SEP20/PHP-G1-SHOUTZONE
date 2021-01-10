import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
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
