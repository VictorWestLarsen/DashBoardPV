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
    this.feedService.getFeeds().subscribe( response => {
      for (let i = 0; i < response[0].completed.length; i++) {
        this.completedURL[response[0].completed[i].box_number] = response[0].completed[i].feed_url;
      }
      for (let j = 0; j < response[0].ongoing.length; j++) {
        this.ongoingURL[response[0].ongoing[j].box_number] = response[0].ongoing[j].feed_url;
      }
      for (let k = 0; k < response[0].upcoming.length; k++) {
        this.upcomingURL[response[0].upcoming[k].box_number] = response[0].upcoming[k].feed_url;
      }

    });
  }
removeFromWatchlist(box) {
  for (let key in this.watchlist) {
    delete this.watchlist[box];
  }
}
  addToWatchlist(box: string, url: string) {
  this.watchlist[box] = url;
  console.log(this.watchlist);
}

}

