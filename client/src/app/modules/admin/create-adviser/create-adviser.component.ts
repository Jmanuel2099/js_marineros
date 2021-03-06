import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SecurityService } from 'src/app/services/security.service';
import * as CryptoJS from 'crypto-js';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-create-adviser',
  templateUrl: './create-adviser.component.html',
  styleUrls: ['./create-adviser.component.css']
})
export class CreateAdviserComponent implements OnInit {

  fgV: FormGroup;
  constructor(private fb: FormBuilder, private secService: SecurityService,
    private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder() {
    this.fgV = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      last: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40), Validators.email]],
      birth: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]],
      address: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      cell: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    });
  }
  get fg() {
    return this.fgV.controls;
  }

  CreateNewAdviEvent() {
    if (this.fgV.invalid) {
      openPlatformModalMessage("ERROR")
    } else {
      let rol: number = 2;
      let firts = this.fg.name.value;
      let last = this.fg.last.value;
      let username = this.fg.username.value;
      let mail = this.fg.email.value;
      let pass = this.fg.password.value;
      let pEncrypted = this.encryptPassword(pass).toString()
      let birth = this.fg.birth.value;
      let address = this.fg.address.value;
      let cell = this.fg.cell.value;
      this.secService.registerClient(rol, firts, last, username, mail, pEncrypted, birth, address, cell).subscribe(data => {
        //console.log(data)
        if (data != undefined)
          this.router.navigate(['/admin/homeAdmin'])
          openPlatformModalMessage("New adviser was created, a verification E-mail will be send");
      });
      this.sendmessageConfimation(firts,last,mail, pass);
    }
  }



  sendmessageConfimation(first:String, last:String, email:String, pass:String){
    let subj= "Account confirmaation JSmarineros&Asociados";
    let m  = "Welcom "+first+" "+last+"! Your Password is: "+ pass;
    this.userservice.sendEmail(m, subj, email).subscribe(()=>{
    });
  }

  encryptPassword(pass: string) {
    var hash = CryptoJS.SHA256(pass);
    // alert(hash.toString()) ;
    var encrypted = CryptoJS.SHA256(hash);
    // alert(encrypted)
    return encrypted;
  }
}
