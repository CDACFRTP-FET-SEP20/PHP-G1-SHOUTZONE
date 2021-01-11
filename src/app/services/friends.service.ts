import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  constructor(private http: HttpClient) {}
  getSuggestionList(user_id: number): Observable<any> {
    return this.http.get('http://localhost:8000/api/getUsers/' + user_id);
  }

  sendFriendRequest(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/sendRequest', data);
  }

  friendList(user_id: number): Observable<any> {
    return this.http.get('http://localhost:8000/api/friends/' + user_id);
  }

  getRequestList(user_id: number): Observable<any> {
    return this.http.get('http://localhost:8000/api/friendRequest/' + user_id);
  }

  acceptFriendRequest(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/requestAccept', data);
  }

  deleteFriendRequest(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/deleteRequest', data);
  }

  removeFriend(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/remove', data);
  }
}
