import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedsService {
  constructor(private http: HttpClient) {
  }
  configURL = '../assets/json/config.json';
  getConfig() {
    return this.http.get(this.configURL);
  }
}

