import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.sass']
})
export class UserDataComponent implements OnInit {
  users: Array<User> = new Array();
  constructor(private userService:AuthService) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe((data:any)=>{
        this.users = data.data
        console.log(this.users)
      })
  }

}
