import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import {Shout} from '../create-shout/Shout';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import{ShoutsService} from '../services/shouts.service';

@Component({
  selector: 'app-shout-feed',
  templateUrl: './shout-feed.component.html',
  styleUrls: ['./shout-feed.component.scss'],
})
export class ShoutFeedComponent implements OnInit {
 

}

