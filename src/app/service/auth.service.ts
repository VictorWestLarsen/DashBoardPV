import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = '/api/login';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router) { }

  Login(username, password) {
        const headers = new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded',
    Authorization: 'Basic' + btoa(username + ':' + password)
    });
        return this.http.post(this.loginUrl, null, {headers, observe: 'response'}).subscribe(response => {
    console.log(response.body.valueOf());
    console.log(response.status);
    if (response.status === 200) {
      this.isLoggedIn();
      this.getCookie('httpOnly');
      console.log(this.getCookie('access'));
      this.router.navigate(['/feeds']);
    }
  },
    reqError =>  alert(reqError.error));
  }

  logOut() {
    this.cookieService.deleteAll('/', 'localhost');
  }

  isLoggedIn() {
    const cookie = this.cookieService.get('access_token_cookie');
    return !!cookie;
  }

  getCSRFToken(type: string) {
    return this.cookieService.get(`csrf_${type}_token`);
  }

  getCookie(type: string) {
    return this.cookieService.get(`${type}_token_cookie`);
  }
}
