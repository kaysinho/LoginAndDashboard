import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) {
  }
  
  ngOnInit() {
  }
  
  login(){
    this.authService.login("test1", 12345)
      .subscribe((data)=>{
        if (data){
          alert('Login exitoso')
        }
      }, (err)=>{
        alert('Ocurrió un error!' + err)
      })

  }

}
