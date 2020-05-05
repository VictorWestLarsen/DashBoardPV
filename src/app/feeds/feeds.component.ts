import { Component, OnInit } from '@angular/core';
import { FeedsService } from '../service/feeds.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  upcoming: any;
  ongoing: any;
  completed: any;

  constructor(private feedService: FeedsService) {
  }
  onSubmit() {

  }

  ngOnInit(): void {
    this.feedService.getFeeds().subscribe(response => {
    });


  }
}
