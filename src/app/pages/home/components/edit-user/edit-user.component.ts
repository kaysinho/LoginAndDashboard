import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

declare var M:any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  adminRole: boolean = false;
  userRole:boolean = false;
  observerRole:boolean = false;

  constructor(private fb:FormBuilder, private activadedRoute:ActivatedRoute,
              private userService:AuthService, private sessionService:SessionService,
              private router:Router) { }

  ngOnInit() {
    this.createForm()
    this.activadedRoute.params.subscribe(params =>{
      this.userService.getUser(params['username'])
      .subscribe((data)=>{
        this.userForm.controls['name'].setValue(data.name)
        this.userForm.controls['username'].setValue(data.username)
        this.userForm.controls['description'].setValue(data.description)
        this.userForm.controls['country'].setValue(data.country)
        this.userForm.controls['role'].setValue(data.role)
        this.userForm.controls['password'].setValue(data.password)
        M.updateTextFields();
        this.getPermits()
      })
      
    })
  }

  async save(){
    let user:User = new User(
      this.userForm.controls['username'].value,
      this.userForm.controls['name'].value,
      this.userForm.controls['password'].value,
      this.userForm.controls['role'].value,
      this.userForm.controls['country'].value,
      this.userForm.controls['description'].value
    )
    if (await this.userService.save(user)){
      this.router.navigate(['/home/all-users'])
    }
  }

  getPermits(){
    switch(this.sessionService.get().role){
      case 'ADMINISTRATOR':
        console.log('Entra')
        this.adminRole = true
        break
      case 'OBSERVER':
        this.observerRole = true
        break
      case 'USER':
        this.userRole = true
        break
      case null:
        this.router.navigate(['/home/all-users'])
        break
    }
  }
  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      description: ['', Validators.required],
      role: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
