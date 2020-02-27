import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../modeles/userModel';
import { BehaviorSubject } from 'rxjs';
import { LoginModel } from '../modeles/loginModel';
import { UserService } from './user.service';
import { RouterLink } from '@angular/router';
//import { userInfo } from 'os';

const baseUrl: String = "http://localhost:3000/api/Users";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  //userInfo= new BehaviorSubject<UserModel>(new UserModel())
  loginInfo = new BehaviorSubject<LoginModel>(new LoginModel())
  usserLoged: boolean = false;

  constructor(private http: HttpClient) {
    this.verifyUserInSession();
  }

  // getLoginInfo(){
  //   return this.loginInfo.asObservable();
  // }

  getUserInfo() {
    return this.loginInfo.asObservable();
  }

  loginUser(user: string, pass: string): Observable<LoginModel> {

    return this.http.post<LoginModel>(`${baseUrl}/login?include=User`,
      { email: user, password: pass },
      { headers: new HttpHeaders({ "content-type": "application/json" }) }
    );
  }
  saveLoginUser(info: LoginModel) {
    info.isLogged = true;
    this.loginInfo.next(info);
    localStorage.setItem("activeUser", JSON.stringify(info));
    //console.log("LoginInfo: " + this.loginInfo)
    //console.log(this.loginInfo)
  }
  verifyUserInSession() {
    let session = localStorage.getItem("activeUser");
    if (session != undefined) {
      this.loginInfo.next(JSON.parse(session));
    }
  }
  isActiveSession() {
    return this.loginInfo.getValue().isLogged
  }
  logoutUser() {
    localStorage.removeItem("activeUser");
    this.loginInfo.next(new LoginModel());
  }

  registerClient(rol, first, last, username, mail, pass, day, address, cell): Observable<UserModel> {
    let body_post = {
      rol: rol,
      realm: "Cliente",
      firstName: first,
      lastName: last,
      username: username,
      email: mail.trim(),
      birthDate: day,
      addres: address,
      cellphone: cell,
      isLogged: false,
      password: pass
    };
    //console.log(body_post)
    return this.http.post<UserModel>(
      `${baseUrl}`,
      body_post,
      { headers: new HttpHeaders({ "content-type": "application/json" }) }
    );
  }

}
