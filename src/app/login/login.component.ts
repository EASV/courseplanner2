import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cp-login',
  templateUrl: './login.component.html' ,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  signInError : string;

  constructor() {
  }

  ngOnInit() {
  }

}
