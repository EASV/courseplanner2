import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./user";
import {Http, Response} from "@angular/http";
import {AppSettings} from "../app.settings";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get(AppSettings.MEN_API_ENDPOINT + 'users')
      .map(response => response.json().data as User[])
      .catch(this.handleError)
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
