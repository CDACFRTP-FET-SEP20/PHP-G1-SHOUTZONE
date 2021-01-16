import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

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

  getUserInfoById(user_id: number): Observable<any> {
    let url = 'http://127.0.0.1:8000/api/userInfoById/' + user_id;
    return this.httpClient.get(url);
  }


  updateData(formData: NgForm, id: any): Observable<any> {
    const form = new FormData();
    form.append('id', id);
    form.append('name', formData.value.name);
    form.append('username', formData.value.username);
    form.append('email', formData.value.email);
    form.append('description', formData.value.description);

    console.log(form);

    return this.httpClient.post('http://127.0.0.1:8000/api/update/' + id, form);
  }

  updateProfilepic(formData: NgForm, id: any): Observable<any> {
    const form = new FormData();
    form.append('id', id);
    form.append('profile_photo', formData.value.profile_photo);

    console.log(form);

    return this.httpClient.post('http://127.0.0.1:8000/api/updateProfile_photo/' + id, form);
  }
}
