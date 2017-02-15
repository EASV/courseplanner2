import {Component} from '@angular/core';
import {Course} from './Course';

@Component({
  selector: 'cp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses : Course[];

  constructor(){
    this.courses = [
      {
        year: 2017,
        title: 'Angular2',
        education: 'Computer Science',
        academy: 'EASV',
        lecturer: 'Lars Bilde'
      },
      {
        year: 2017,
        title: 'ITO',
        education: 'Computer Science',
        academy: 'EASV',
        lecturer: 'Lars Bilde'
      }];
  }
}


