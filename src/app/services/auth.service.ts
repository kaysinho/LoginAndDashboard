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
    this.getAllUsers().subscribe(()=>{})
  }

  getAllUsers():Observable<Array<User>>{
    return new Observable((observer)=>{
      this.http.get<Array<User>>('./assets/data/data1.json').subscribe((data:any)=>{
        this.users = data.data
        observer.next(this.users)
      })

    })
  }

  save(user:User):Promise<boolean>{
    return new Promise((resolve, reject)=>{
      this.users.forEach((u, index)=>{
        if (u.username==user.username){
          this.users[index] = user
          resolve(true)
        }
      })
    })
  }


  getUser(username:string):Observable<User>{
    return new Observable((observer)=>{
      this.http.get<Array<User>>('./assets/data/data1.json')
      .subscribe((data:any)=>{
        try {
          let user: User = data.data.filter((u)=> u.username==username)[0]
          observer.next(user)
        } catch (error) {
          observer.error(error)
        }
        observer.complete()
      })
    });
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
