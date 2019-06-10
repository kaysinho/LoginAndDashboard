import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDataComponent } from './pages/home/components/user-data/user-data.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SessionService } from './services/session.service';
import { EditUserComponent } from './pages/home/components/edit-user/edit-user.component';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, CommonModule,
    AppRoutingModule, ReactiveFormsModule,
    FormsModule, HttpClientModule, HomeModule
  ],
  providers: [AuthService, AuthGuard, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
