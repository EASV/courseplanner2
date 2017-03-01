import { Injectable } from '@angular/core';
import {MockBackend, MockConnection} from "@angular/http/testing";
import {AppSettings} from "../app/app.settings";
import {Response, ResponseOptions} from "@angular/http";

@Injectable()
export class MockBackendService {

  constructor(private backend: MockBackend) {

  }

  start() : void {
    this.backend.connections.subscribe((c: MockConnection) => {
      const URL = AppSettings.MEN_API_ENDPOINT + 'users';

      if (c.request.url === URL && c.request.method === 0) {
        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify({data: [
            {username: 'lbilde', password:'123', email:'cheese@namnam.dk'},
            {username: 'ljb', password:'itsASecret!', email:'ljb@easv.dk'},
            {username: 'ilikechokolate', password:'123', email:'cheese33@namnam33.dk'}
          ]})
        })));
      }
    });
  }
}
