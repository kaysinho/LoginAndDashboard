import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './home.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    UserDataComponent,
    EditUserComponent
  ], imports:[HomeRoutingModule, FormsModule, ReactiveFormsModule, CommonModule]})
export class HomeModule { }
