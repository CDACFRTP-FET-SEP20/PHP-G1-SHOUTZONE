import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { ShoutFeedComponent } from './shout-feed/shout-feed.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'feed' },
      { path: 'feed', component: ShoutFeedComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'friends', component: FriendsListComponent },
      { path: 'request', component: FriendRequestComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
