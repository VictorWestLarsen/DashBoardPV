import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable()
export class LoginService {
  public JWT;
  public authenticated = false;
  public httpError;
  constructor(private http: HttpClient, private router: Router) { }
  loginUrl = 'http://127.0.0.1:5000/login';
  public loginUser(username, password, httpOptions) {
  return this.http.post(this.loginUrl, null,  httpOptions).subscribe(response => {
    this.JWT = response.valueOf();
    console.log(this.JWT);
    if (this.JWT != null) {
      this.authenticated = true;
      this.router.navigate(['/feeds'])
      console.log(this.authenticated);
    }
  },
    reqError =>  alert(reqError.error));
  }
}

