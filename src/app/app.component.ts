import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router, private authService: AuthService) {}
  LogOff() {
    this.authService.logOut();
}
}


