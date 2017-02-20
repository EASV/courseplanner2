import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {AuthService} from "../auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'cp-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginError : string;
  request: Subscription;
  tryingToLogIn : boolean;

  constructor(public loginValidationBar: MdSnackBar,
              private router : Router,
              private authService: AuthService) {

  }

  login(user){
    this.tryingToLogIn = true;
    if(this.request){
      this.request.unsubscribe();
    }
    this.request = this.authService
      .login(user.username, user.password)
      .delay(5000)
      .subscribe((lUser) => {
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
        this.tryingToLogIn = false;
      });


  }

  ngOnInit() {
  }

}
