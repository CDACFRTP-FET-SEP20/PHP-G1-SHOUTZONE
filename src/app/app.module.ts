import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { ShoutFeedComponent } from './shout-feed/shout-feed.component';
import { CreateShoutComponent } from './create-shout/create-shout.component';
import { ShoutComponent } from './shout/shout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    ProfileComponent,
    NavbarComponent,
    AsideComponent,
    FriendsListComponent,
    FriendRequestComponent,
    ShoutFeedComponent,
    CreateShoutComponent,
    ShoutComponent,
    AddFriendComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
