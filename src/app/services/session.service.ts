import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  userSession: User = new User('', '', 0, '', '', '')
  constructor(private http:HttpClient) { 

  }

  get(): User{
    return this.userSession
  }

  async set(username:string): Promise<boolean>{
    return new Promise((resolve, reject)=>{
      this.http.get<Array<User>>('./assets/data/data1.json')
          .subscribe((data:any)=>{
              this.userSession = data.data.filter((u)=> u.username==username)[0]
              resolve(true)
          }, (err)=> reject(false));

    })
  }
}
