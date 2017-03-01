import {Component} from '@angular/core';
import {Course} from './Course';
import { environment } from '../environments/environment';
import {MockBackend} from "@angular/http/testing";
import {MockBackendService} from "../mock-backend/mock-backend.service";

@Component({
  selector: 'cp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses : Course[];

  constructor(private mockBackendService: MockBackendService){
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
    if (!environment.production) {
      mockBackendService.start();
    }
  }
}


