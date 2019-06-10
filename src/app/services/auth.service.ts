import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:Array<User> = []
  constructor(private http:HttpClient) { 
    
  }

  getAllUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>('./assets/data/data1.json')
  }

  login(username:string, password:number):Observable<boolean>{
    return new Observable((observer)=>{
      this.http.get<Array<User>>('./assets/data/data1.json')
        .subscribe((data:any)=>{
          try {
            let loginSuccess: boolean = data.data.some((u)=> u.username==username && u.password==password)
            observer.next(loginSuccess)
          } catch (error) {
            observer.error(error)
          }
          observer.complete()
        })

    })
  }
}
