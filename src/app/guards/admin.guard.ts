import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private sessionService:SessionService){

  }
  canActivate():boolean{
    try {
      if (this.sessionService.get().role=='ADMINISTRATOR'){
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }
}
