import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {AuthService} from "../auth.service";

@Component({
  selector: 'cp-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginError : string;

  constructor(public loginValidationBar: MdSnackBar,
              private router : Router,
              private authService: AuthService) {

  }

  login(user){
    this.authService
      .login(user.username, user.password)
      .then((lUser) => {
        if(lUser){
          this.loginError = null;
          this.router.navigate(['/']).then(() => {
            this.loginValidationBar.open("You are logged in", "Ok", {
              duration: 3000,
            });
          });
        } else {
          this.loginError = "username and password was wrong";
        }
      });


  }

  ngOnInit() {
  }

}
