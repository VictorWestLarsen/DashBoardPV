import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService} from './auth.service';
import {Observable, Subscription} from 'rxjs';



@Injectable()
export class FeedsService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  feedURL = '/api/feeds';
  public getFeeds(): Observable<any> {
    return this.http.get(this.feedURL);
  }

}

