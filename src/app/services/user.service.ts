import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUserDetails(userId: number): Observable<any> {
    return this.httpClient.get(
      `http://localhost:8000/api/user/details/${userId}`
    );
  }
}
