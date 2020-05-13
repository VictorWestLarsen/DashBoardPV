import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService} from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class FeedsService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }
  feedURL = '/api/feeds';
  getFeeds(): Observable<any> {
    return this.http.get(this.feedURL);
  }

}

