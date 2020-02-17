import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/modeles/userModel';
import { LoginModel } from 'src/app/modeles/loginModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subs: Subscription;
  loginInfo: LoginModel;
  userName: String;
  userLogged: boolean = false;
  rol: number;

  constructor(private secService: SecurityService) { }

  ngOnInit() {
    this.verifyUserSesion();
  }

  verifyUserSesion() {
    this.subs = this.secService.getUserInfo().subscribe(data => {
      if (data.isLogged) {
        this.loginInfo = data;
        // console.log("Hola")
        // console.log(this.loginInfo.user.rol)
        // console.log("Mundo")
        this.updateInfo(data)
      }else{
        this.userLogged = false;
        this.loginInfo = undefined;
      }
    });
  }
  updateInfo(data) {
    this.userLogged = data.isLogged;
    this.rol= this.loginInfo.user.rol;
    //alert(this.rol)
  }

}
