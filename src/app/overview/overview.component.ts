import { Component, OnInit } from '@angular/core';
import {FeedsService} from '../service/feeds.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private feedService: FeedsService) { }
  watchlist = {};
  ngOnInit(): void {
    this.watchlist = this.feedService.watchlist;
  }
  removeFromWatchlist(box) {
  // tslint:disable-next-line:forin
    this.feedService.WatchlistRemoveBox(box);
  }
}
