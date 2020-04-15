import { Component, Inject, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl } from '@angular/forms';
import { routing } from '../app.routing';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  public password;
  public username;
        httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Basic' + btoa(this.username + ':' + this.password)
    })
  };
  constructor(private loginService: LoginService, private http: HttpClient ) {
  }
  onSubmit() {
  console.log('Basic' + btoa(this.username + ':' + this.password));
  console.log(this.username, this.password);
    // tslint:disable-next-line:max-line-length
  this.loginService.loginUser(this.username, this.password, this.httpOptions).subscribe(resp => {console.log(resp.headers.headers.get('x-access-token'));
  });
  }
  ngOnInit(): void {

  }
}
