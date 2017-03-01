import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, BaseRequestOptions, Http} from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view.component';
import {AuthService} from "./auth/auth.service";
import {UserService} from "./users/user.service";
import {MockBackend} from "@angular/http/testing";
import {MockBackendService} from "../mock-backend/mock-backend.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    HomeComponent,
    LoginComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    UserService,
    MockBackend,
    MockBackendService,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (
        backend: MockBackend,
        options: BaseRequestOptions) => {
            return new Http(backend, options);
        }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
