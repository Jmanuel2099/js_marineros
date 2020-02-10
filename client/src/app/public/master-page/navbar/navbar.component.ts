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
  userName:String;
  userLogged:boolean = false;
  rol:number;

  

  constructor(private secService:SecurityService) { }

  ngOnInit() {
    this.verifyUserSesion();
  }
  
  verifyUserSesion(){
    this.subs = this.secService.getUserInfo().subscribe(data => {
      this.userInfo = data.user;
      //console.log (data)
     // console.log (this.userInfo)
      this.updateInfo(data)
      // this.rol=this.userInfo.rol;
      //this.userLogged=data.isLogged; 
    });
  }
  updateInfo(data){
    this.userLogged =data.isLogged;
    //this.rol= this.userInfo.rol;
    //alert(this.userInfo.rol)
  }

}
