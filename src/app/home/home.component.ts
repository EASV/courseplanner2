import { Component, OnInit } from '@angular/core';
import {UserService} from "../users/user.service";
import {Observable} from "rxjs";
import {User} from "../users/user";
import {log} from "util";

@Component({
  selector: 'cp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toolbarTitle = 'Courseplanner2';

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  users : Observable<User[]>;

  constructor(private userService : UserService) {
    this.users = this.userService.getUsers();
    console.log('users', this.users);
  }

  ngOnInit() {
  }

}
