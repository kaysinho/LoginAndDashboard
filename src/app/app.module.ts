import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule, CommonModule,
    AppRoutingModule, ReactiveFormsModule,
    FormsModule, HttpClientModule
  ],
  providers: [AuthService, AuthGuard, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
