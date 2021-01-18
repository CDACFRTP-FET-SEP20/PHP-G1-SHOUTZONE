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
import { AddFriendComponent } from './add-friend/add-friend.component';
import { CreateShoutComponent } from './create-shout/create-shout.component';
import { AuthGuardService } from './services/authgaurd.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';

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
    path: 'createshout',
    component: CreateShoutComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'friend',
    component: AddFriendComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'feed' },
      { path: 'feed', component: ShoutFeedComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'friends', component: FriendsListComponent },
      { path: 'request', component: FriendRequestComponent },
      { path: 'edit', component: UpdateProfileComponent },
      { path: 'search', component: SearchFriendComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
