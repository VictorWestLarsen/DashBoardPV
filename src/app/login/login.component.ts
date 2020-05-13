import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  public password;
  public username;
  constructor(private authService: AuthService) {
  }

  onSubmit() {
    this.username = this.form.get('email').value;
    this.password = this.form.get('pass').value;
    console.log(this.username, this.password);

    this.authService.Login(this.username, this.password);
  }
  ngOnInit(): void {
  this.form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    pass: new FormControl('', Validators.required),
  });
  }
}
