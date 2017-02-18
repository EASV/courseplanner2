import {Component, OnInit} from '@angular/core';
import {User} from "../users/user";
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'cp-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginError : string;
  users : User[];

  constructor(public loginValidationBar: MdSnackBar, private router : Router) {
    this.users = [
      {username: 'lbilde', password:'123', email:'cheese@namnam.dk'},
      {username: 'ljb', password:'123', email:'cheese22@namnam22.dk'},
      {username: 'ilikechokolate', password:'123', email:'cheese33@namnam33.dk'}
    ];
  }

  login(user){
    let userAccepted = this.users
      .filter(x => x.username === user.username)
      .filter(y => y.password === user.password);
    if(userAccepted && userAccepted.length === 1){
      this.loginError = null;
      this.router.navigate(['/']).then(() => {
        this.loginValidationBar.open("You are logged in", "Ok", {
          duration: 3000,
        });
      });
    } else {
      this.loginError = "username and password was wrong";
    }

  }

  ngOnInit() {
  }

}
