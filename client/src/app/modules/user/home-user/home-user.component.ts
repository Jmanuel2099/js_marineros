import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/modeles/loginModel';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/modeles/userModel';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  userInfo : UserModel
  userName:String
  subscription: Subscription;

  constructor(private secService: SecurityService) { }

  ngOnInit() {
    this.showInfoUser();
  }

  showInfoUser(){ this.subscription = this.secService.getUserInfo().subscribe(u=>{
    this.userInfo = u.user; 
    this.updateInfo();
    });
  }

  updateInfo(){
    this.userName= `${ this.userInfo.firstName} ${this.userInfo.lastName}`
  }

}
