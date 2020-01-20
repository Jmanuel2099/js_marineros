import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged: boolean;

  constructor(private secService:SecurityService) {

   }

  ngOnInit() {
    this.verifyUserSesion();
  }
  
  verifyUserSesion(){
    this.userLogged= this.secService.isUsserLoged();
  }

}
