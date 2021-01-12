import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shout } from '../create-shout/Shout';

@Injectable({
  providedIn: 'root',
})
export class ShoutsService {
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<any> {
    let url = 'http://127.0.0.1:8000/api/shouts/allshouts';
    return this.httpClient.get(url);
  }

  getComments(shout_id: any): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/comment/' + shout_id);
  }

  storeComment(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/postComment', data);
  }

  addShout(shout: Shout, id: any) {
    const formData = new FormData();
    formData.append('shoutMedia', shout.shoutMedia);
    formData.append('shoutText', shout.shoutText);
    formData.append('shoutType', shout.shoutType);
    formData.append('user_id', id);

    console.log(formData);

    if (shout.shoutMedia != null)
      return this.httpClient.post(
        'http://127.0.0.1:8000/api/shouts/add',
        formData
      );

    if (shout.shoutText != null)
      return this.httpClient.post(
        'http://127.0.0.1:8000/api/shouts/add',
        formData
      );
  }
  getShoutsById(user_id: number): Observable<any> {
    let url = 'http://127.0.0.1:8000/api/shouts/show/' + user_id;
    return this.httpClient.get(url);
  }
  deleteOwnShout(id: number): Observable<any> {
    return this.httpClient.get(
      'http://127.0.0.1:8000/api/shouts/destroy/' + id
    );
  }
}
