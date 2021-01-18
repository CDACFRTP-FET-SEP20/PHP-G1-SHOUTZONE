import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userId: number;

  constructor(private auth: AuthService, private router: Router) {
    this.userId = this.auth.getUserDetails().id;
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logoutUser();
    this.router.navigate(['/login']);
  }
}
