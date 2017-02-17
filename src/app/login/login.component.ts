import {Component, OnInit} from '@angular/core';
import {User} from "../users/user";

@Component({
  selector: 'cp-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  users : User[];
  constructor() {
    this.users = [
      {username: 'lbilde', password:'123', email:'cheese@namnam.dk'},
      {username: 'ljb', password:'123', email:'cheese22@namnam22.dk'},
      {username: 'ilikechokolate', password:'123', email:'cheese33@namnam33.dk'}
    ];
  }

  login(user){
    console.log('user', user);
  }

  ngOnInit() {
  }

}
