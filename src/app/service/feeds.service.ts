import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService} from './auth.service';
import {Observable, Subscription} from 'rxjs';



@Injectable()
export class FeedsService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public completedURL = {};
  public upcomingURL = {};
  public ongoingURL = {};
  public watchlist = {};

  feedURL = '/api/feeds';

  public getFeeds(): Subscription {
    return this.http.get(this.feedURL).subscribe(response => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < response[0].completed.length; i++) {
        this.completedURL[response[0].completed[i].box_number] = response[0].completed[i].feed_url;
      }
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < response[0].ongoing.length; j++) {
        this.ongoingURL[response[0].ongoing[j].box_number] = response[0].ongoing[j].feed_url;
      }
      // tslint:disable-next-line:prefer-for-of
      for (let k = 0; k < response[0].upcoming.length; k++) {
        this.upcomingURL[response[0].upcoming[k].box_number] = response[0].upcoming[k].feed_url;
      }
    });
  }

  watchListAddBox(box: string, url: string) {
    this.watchlist[box] = url;
  }

  WatchlistRemoveBox(box) {
    for (const key in this.watchlist) {
      delete this.watchlist[box];
    }
  }
}
