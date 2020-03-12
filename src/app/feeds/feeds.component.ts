import { Component, OnInit } from '@angular/core';
import { FeedsService } from './feeds.service';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showConfig() {
    this.feedsService
  }
}
