import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {User } from '../user';


@Injectable()
export class LoginService {
  public httpError;
  constructor(private user: User, private http: HttpClient, private router: Router) { }
  loginUrl = 'http://127.0.0.1:5000/login';
  public loginUser(username, password, httpOptions) {
  return this.http.post(this.loginUrl, null,  httpOptions).subscribe(response => {
    this.user.token += response.valueOf();
    console.log(response.valueOf())
    if (this.user.token.length < 25) {
      this.user.authorized = true;
      this.router.navigate(['/feeds']);
      console.log(this.user.authorized, this.user.token);
    }
  },
    reqError =>  alert(reqError.error));
  }
}

