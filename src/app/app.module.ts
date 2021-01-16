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
import { AddFriendComponent } from './add-friend/add-friend.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentsComponent } from './comments/comments.component';
import { ReportComponent } from './report/report.component';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BioComponent } from './bio/bio.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

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
    AddFriendComponent,
    FriendRequestComponent,
    ShoutFeedComponent,
    CreateShoutComponent,
    ShoutComponent,
    CommentsComponent,
    ReportComponent,
    BioComponent,
    UpdateProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    MatMenuModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
