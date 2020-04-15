import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUrl = 'http://127.0.0.1:5000/login';
  public loginUser(username, password, httpOptions): Observable<any> {
    return this.http.post(this.loginUrl, null , httpOptions);
  }
  // public loginUser(username, password): Observable<any> {
    // const params = new HttpParams().set('username', username).set('password', password);
    // return this.http.get(this.loginUrl, { params , observe: 'response' });
}
