import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private authService:AuthService, private fb:FormBuilder,
              private router:Router, private session:SessionService) {
  }
  
  ngOnInit() {
    this.createForm()
  }
  
  login(){

    if (this.userForm.invalid){
      return
    }

    
    this.authService.login(this.userForm.get('username').value, this.userForm.get('password').value)
      .subscribe(async (data:boolean)=>{
        if (!data){
          alert('Datos invalidos' + data)
        }
        let setSession: boolean = await this.session.set(this.userForm.get('username').value)
        if (setSession){
          this.router.navigate(['/home/all-users'])
        }
        
      }, (err)=>{
        alert('Ocurrió un error!' + err)
      })
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}


