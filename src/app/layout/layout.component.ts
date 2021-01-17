import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateShoutComponent } from '../create-shout/create-shout.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateShoutComponent, {
      width: '70vw',
      data: { type: 'create-shout' },
    });
  }

  logout(): void {
    this.auth.logoutUser();
    this.router.navigate(['/login']);
  }

  navigateTo(path: string): void {
    this.router.navigateByUrl(`${path}`);
  }
}
