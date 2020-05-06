import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService} from './login.service';
import { Observable } from 'rxjs';

@Injectable()
export class FeedsService {
  constructor(private http: HttpClient, private loginService: LoginService) {
  }
  feedURL = 'http://127.0.0.1:5000/feeds';
  getFeeds(): Observable<any> {
    return this.http.get(this.feedURL)
  }

}

