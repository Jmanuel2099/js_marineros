import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/modeles/userModel';

@Component({
  selector: 'app-home-adviser',
  templateUrl: './home-adviser.component.html',
  styleUrls: ['./home-adviser.component.css']
})
export class HomeAdviserComponent implements OnInit {

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
