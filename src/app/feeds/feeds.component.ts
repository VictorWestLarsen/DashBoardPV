import {Component, OnDestroy, OnInit} from '@angular/core';
import { FeedsService } from '../service/feeds.service';



@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  constructor(private feedService: FeedsService) {}
  objectKeys = Object.keys;
  public completedURL = {};
  public upcomingURL = {};
  public ongoingURL = {};
  public watchlist = {};

ngOnInit(): void {
  this.feedService.getFeeds();
  this.completedURL = this.feedService.completedURL;
  this.upcomingURL = this.feedService.upcomingURL;
  this.ongoingURL = this.feedService.ongoingURL;
  this.watchlist = this.feedService.watchlist
}
removeFromWatchlist(box) {
  // tslint:disable-next-line:forin
  this.feedService.WatchlistRemoveBox(box);
  }
    addToWatchlist(box: string, url: string) {
  this.feedService.watchListAddBox(box, url);
}
}

