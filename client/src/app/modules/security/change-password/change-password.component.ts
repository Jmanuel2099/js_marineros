import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import * as CryptoJS from 'crypto-js';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  fgValidator: FormGroup;
  constructor(private fb: FormBuilder, private secService:SecurityService) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgValidator= this.fb.group({
      new1:['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      new2:['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    });
  }

  get fg(){
    return this.fgValidator.controls;
  }

  changePassword(){
    let userForChange= this.secService.getInfo().user.id;
    console.log(userForChange)
    let pass1 = this.fg.new1.value;
    let pass2 = this.fg.new2.value;
    if( pass1 == pass2){
      this.changePasswordInBD(userForChange,pass2);
    }else{
      openPlatformModalMessage("New passwords don't match")
    }
  }

  changePasswordInBD(Id:String, p:String){
    console.log(Id)
    this.secService.getUsers().subscribe(u=> {
      let user = u.find(x => x.id == Id);
      console.log(user)
      let rol = user.rol;
      let realm = user.realm;
      let first = user.firstName;
      let last = user.lastName;
      let usern = user.username;
      let email = user.email;
      let birt = user.birthDate;
      let addr = user.address;
      let cell = user.cellphone;
      let islogged = user.isLogged;
      //let pass = p;
      let pEncrypted = this.encryptPassword(p.toString()).toString()
      let id = user.id;

      this.secService.putUser(rol,realm,first,last,usern,email,birt,addr,cell,islogged,pEncrypted,id).subscribe(y =>{
        openPlatformModalMessage("Password change")
      });
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
