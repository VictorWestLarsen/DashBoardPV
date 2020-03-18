import { Component, OnInit } from '@angular/core';
import { FeedsService } from './feeds.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  constructor(private feedService: FeedsService) { }
  feeds$;
  ngOnInit(): void {
  }
  getFeed(): Observable<object> {
      return this.feeds$ = this.feedService.getConfig();
      console.log(this.feeds$);
  }
}
