import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {
  title = 'Welcome to the Course Planner';

  constructor() { }

  ngOnInit() {
  }

}
