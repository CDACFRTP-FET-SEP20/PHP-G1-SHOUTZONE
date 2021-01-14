import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  baseUrl: string = 'http://localhost:8000/api/report/shout';

  constructor(private httpClient: HttpClient) {}

  reportPost(report: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, report);
  }
}
