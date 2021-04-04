import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
  url = `http://127.0.0.1:8080/sendemail/api/v1/emails/`;

  constructor(private http: HttpClient) { }

  sendMessage(subject: string, message: string): Observable<object>{
    const opts = {params: new HttpParams({fromString: 'subject=' + subject + '&msg=' + message})};
    return this.http.get(this.url, opts );
  }
}
