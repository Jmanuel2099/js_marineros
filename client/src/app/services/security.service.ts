import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../modeles/userModel';
import { BehaviorSubject } from 'rxjs';

const baseUrl:String="http://localhost:3000/api/Users/login?include=User";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  
  userInfo= new BehaviorSubject<UserModel>(new UserModel());
  usserLoged:boolean = false;

  constructor(private http:HttpClient) { 
    this.verifyUserInSession();
  }
 
  getUserInfo() {
    return this.userInfo.asObservable();
  }

loginUser(user:string, pass:string):Observable<UserModel>{

  return this.http.post<UserModel>(`${baseUrl}login?include=User`,
   {email:user, password:pass},
   {headers:new HttpHeaders({"content-type":"application/json"})}
   );
}

saveLoginUser(user:UserModel){
  /*
    let tb_user = JSON.parse(localStorage.getItem("tb_users"));
    let user = tb_user.find(u => u.email == username && u.password == pass);

    if (user != undefined) {
      user.isLogged = true;
      this.userInfo.next(user);
      localStorage.setItem("activeUser", JSON.stringify(user));
    }
    return user;
  */
 user.isLogged=true;
 this.userInfo.next(user);
 localStorage.setItem("activeUser", JSON.stringify(user));
 
}
verifyUserInSession() {
  let session = localStorage.getItem("activeUser");
  if(session != undefined){
    this.userInfo.next(JSON.parse(session));
  }
}
logoutUser(){
  localStorage.removeItem("activeUser");
  this.userInfo.next(new UserModel());
}
}
