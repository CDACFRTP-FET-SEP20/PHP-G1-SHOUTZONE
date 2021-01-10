import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = {
    username: 'amey khaire',
    friends: 89,
    shouts: 78,
  };

  data = [
    {
      type: 'text',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla dolorum earum eaque delectus maxime quae ex eius eum deserunt alias, rerum quidem eos aliquam voluptatum, quibusdam facere esse commodi.',
      createdAt: '2021-1-6',
    },
    {
      type: 'text',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla dolorum earum eaque delectus maxime quae ex eius eum deserunt alias, rerum quidem eos aliquam voluptatum, quibusdam facere esse commodi.',
      createdAt: '2021-1-6',
    },
    {
      type: 'audio',
      content: 'This is audio',
      media: '../../assets/audio.mp3',
      createdAt: '2021-1-6',
    },
    {
      type: 'video',
      content: 'This is video',
      media: '../../assets/video.mp4',
      createdAt: '2021-1-6',
    },
    {
      type: 'image',
      content: 'This is image',
      media: '../../assets/image.jpg',
      createdAt: '2021-1-6',
    },
    {
      type: 'audio',
      content: 'This is audio',
      media: '../../assets/audio.mp3',
      createdAt: '2021-1-6',
    },
    {
      type: 'video',
      content: 'This is video',
      media: '../../assets/video.mp4',
      createdAt: '2021-1-6',
    },
    {
      type: 'image',
      content: 'This is image',
      media: '../../assets/image.jpg',
      createdAt: '2021-1-6',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
