import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Shout} from '../create-shout/Shout';


@Injectable({
  providedIn: 'root'
})
export class ShoutsService {
  constructor(private httpClient: HttpClient) {}
  getData():Observable<any> {
    let url = 'http://127.0.0.1:8000/api/list';
    return this.httpClient.get(url);
  }




  addShout(shout:Shout, id: any){
    const formData = new FormData();
    formData.append('shoutMedia',shout.shoutMedia);
    formData.append('shoutText',shout.shoutText);
    formData.append('shoutType',shout.shoutType);
    formData.append('user_id', id);

    console.log(formData);
    return this.httpClient.post('http://127.0.0.1:8000/api/shouts/add', formData);

  }


}
