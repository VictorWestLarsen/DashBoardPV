import { Component, OnInit } from '@angular/core';
import { FeedsService } from '../service/feeds.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  upcomingURL = [];
  ongoingURL = [];
  completedURL = [];
  upcoming = [];
  ongoing = [];
  completed = [];
  test = [];

  constructor(private feedService: FeedsService) {
  }

  onSubmit() {

  }

  ngOnInit(): void {
    this.feedService.getFeeds().subscribe(response => {
      this.completed.push(response[0]['completed']);
      this.ongoing.push(response[0]['ongoing']);
      this.upcoming.push(response[0]['upcoming'])

      for (let i = 0; i < this.completed[0].length; i++){
        this.completedURL.push(this.completed[0][i]['feed_url'])
      }
      for (let i = 0; i < this.ongoing[0].length; i++){
        this.ongoingURL.push(this.ongoing[0][i]['feed_url'])
      }
      for (let i = 0; i < this.upcoming[0].length; i++){
        this.upcomingURL.push(this.upcoming[0][i]['feed_url'])
      }
  })
  }
}
       /* this.upcoming = response['upcoming'], this.ongoing = response['ongoing'], this.completed['completed']});
    console.log(this.upcoming)
    for (let i = 0; i < this.upcoming.length; i++){
      this.upcomingURL.push(this.upcoming[i])
      console.log(this.upcomingURL)*/
