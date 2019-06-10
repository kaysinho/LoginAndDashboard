import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  constructor(private router:Router, private session: SessionService){

  }
  canActivate():boolean{
    if (this.session.get().username.length==0){
      this.router.navigate(['/login'])
      console.log('No hay session')
      return false
    }

    return true
  }
}
