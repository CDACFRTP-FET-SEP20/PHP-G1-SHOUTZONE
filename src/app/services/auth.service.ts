import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private http: HttpClient) {}

   public loginUserFromRemote(user: User): Observable<any> {

    return this.http.post("http://127.0.0.1:8000/api/userLogin", user)
  }

  public registerUserFromRemote(user: User): Observable<any> {
    console.log('This is register service');

    return this.http.post("http://127.0.0.1:8000/api/register", user)
  }
}

