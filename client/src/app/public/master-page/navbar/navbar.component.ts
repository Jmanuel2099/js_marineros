import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/modeles/userModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subs: Subscription;
  userInfo: UserModel;
  userLogged:boolean = false;

  

  constructor(private secService:SecurityService) { }

  ngOnInit() {
    this.verifyUserSesion();
  }
  
  verifyUserSesion(){
    this.subs = this.secService.getUserInfo().subscribe(user => {
      this.userInfo = user;
      this.userLogged= user.isLogged;
    });
  }

}
