import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  public password;
  public username;
  public WrongCred = this.loginService.httpError;
  constructor(private loginService: LoginService, private router: Router) {
  }

  onSubmit() {
    this.username = this.form.get('email').value;
    this.password = this.form.get('pass').value;
    console.log(this.username, this.password);
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      Authorization: 'Basic' + btoa(this.username + ':' + this.password)
    })
  };
    this.loginService.loginUser(this.username, this.password, httpOptions);
  }
  ngOnInit(): void {
  this.form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    pass: new FormControl('', Validators.required),
  });
  }
}
