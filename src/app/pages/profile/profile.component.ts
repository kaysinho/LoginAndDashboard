import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

declare var M: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  adminRole: boolean = false;
  userRole: boolean = false;
  observerRole: boolean = false;

  constructor(private fb: FormBuilder,
    private userService: AuthService, private sessionService: SessionService,
    private router: Router) { }

  ngOnInit() {
    this.createForm()

    let user : User = this.sessionService.get()

    this.userForm.controls['name'].setValue(user.name)
    this.userForm.controls['username'].setValue(user.username)
    this.userForm.controls['description'].setValue(user.description)
    this.userForm.controls['country'].setValue(user.country)
    this.userForm.controls['role'].setValue(user.role)
    this.userForm.controls['password'].setValue(user.password)

    setTimeout(()=>{M.updateTextFields()}, 200)

  }

  async save() {
    let user: User = new User(
      this.userForm.controls['username'].value,
      this.userForm.controls['name'].value,
      this.userForm.controls['password'].value,
      this.userForm.controls['role'].value,
      this.userForm.controls['country'].value,
      this.userForm.controls['description'].value
    )
    if (await this.userService.save(user)) {
      this.sessionService.userSession = user
      this.router.navigate(['/home/all-users'])
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
