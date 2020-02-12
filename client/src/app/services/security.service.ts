import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../modeles/userModel';
import { BehaviorSubject } from 'rxjs';
import { LoginModel } from '../modeles/loginModel';
//import { userInfo } from 'os';

const baseUrl:String="http://localhost:3000/api/Users/";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  
  userInfo= new BehaviorSubject<UserModel>(new UserModel());
  loginInfo= new BehaviorSubject<LoginModel>(new LoginModel())
  usserLoged:boolean = false;

  constructor(private http:HttpClient) { 
    this.verifyUserInSession();
  }
 
  // getLoginInfo(){
  //   return this.loginInfo.asObservable();
  // }

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
 user.isLogged=true;
 this.userInfo.next(user);
 localStorage.setItem("activeUser", JSON.stringify(user));
 //console.log(user.email)
 
}
verifyUserInSession() {
  let session = localStorage.getItem("activeUser");
  if(session != undefined){
    this.userInfo.next(JSON.parse(session));
  }
}
isActiveSession(){
  return this.userInfo.getValue().isLogged
}
logoutUser(){
  localStorage.removeItem("activeUser");
  this.userInfo.next(new UserModel());
}

getUser():Observable<UserModel[]>{
  let Users = this.http.get<UserModel[]>(`{baseURL}`);
  return Users;
}

}
