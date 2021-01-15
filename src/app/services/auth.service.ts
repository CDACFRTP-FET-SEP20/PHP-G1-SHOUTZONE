import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/userLogin', user);
  }

  public storeUserData(user: User): Observable<any> {
    console.log('in storedata');

    sessionStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('username', JSON.stringify(user.username));
    sessionStorage.setItem('User_ID', JSON.stringify(user.id));

    return null;
  }

  public getUserDetails(): User | any {
    if (sessionStorage.user && localStorage.user) {
      return JSON.parse(sessionStorage.user);
    }
    return null;
  }

  public logoutUser(): boolean {
    if (
      sessionStorage.clear() === undefined &&
      localStorage.clear() === undefined
    ) {
      return true;
    }
    return false;
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register', user);
  }
}
