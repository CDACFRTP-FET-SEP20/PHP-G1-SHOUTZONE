import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shout-feed',
  templateUrl: './shout-feed.component.html',
  styleUrls: ['./shout-feed.component.scss'],
})
export class ShoutFeedComponent implements OnInit {
  faLike = faThumbsUp;
  data = [
    {
      id: 1,
      type: 'text',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla dolorum earum eaque delectus maxime quae ex eius eum deserunt alias, rerum quidem eos aliquam voluptatum, quibusdam facere esse commodi.',
      createdAt: '2021-1-6',
    },
    {
      id: 2,
      type: 'audio',
      content: 'This is audio',
      media: '../../assets/audio.mp3',
      createdAt: '2021-1-6',
    },
    {
      id: 3,
      type: 'video',
      content: 'This is video',
      media: '../../assets/video.mp4',
      createdAt: '2021-1-6',
    },
    {
      id: 4,
      type: 'image',
      content: 'This is image',
      media: '../../assets/image.jpg',
      createdAt: '2021-1-6',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
