import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private secServie: SecurityService, private router:Router) { }

  ngOnInit() {
    this.secServie.logoutUser();
    this.router.navigate(["/home"])

  }

}
