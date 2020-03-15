import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/modeles/userModel';
import * as CryptoJS from 'crypto-js';
import { UserService } from 'src/app/services/user.service';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  fgValidation: FormGroup;
  listUsers:UserModel[]=[];

  constructor(private fb: FormBuilder, private secService: SecurityService, private userService: UserService) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgValidation= this.fb.group({
      email:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email]]
    });
  }
  get fg(){
    return this.fgValidation.controls;
  }

  changePassword(){
    let email = this.fg.email.value;
    this.secService.getUsers().subscribe(u =>{
      let user= u.find(x => x.email == email)
      //console.log(user)
      if(user == undefined){
        openPlatformModalMessage("Email invalid")
      }else{
        
        let pass = Math.random().toString();
        this.changePasswordInBD(user.id, pass);
        // let rol = user.rol;
        // let realm = user.realm;
        // let first = user.firstName;
        // let last = user.lastName;
        // let usern = user.username;
        // let email = user.email;
        // let birt = user.birthDate;
        // let addr = user.address;
        // let cell = user.cellphone;
        // let islogged = user.isLogged;
        // let pass = Math.random().toString();
        // let pEncrypted = this.encryptPassword(pass.toString()).toString()
        // let id = user.id;
  
        // this.secService.putUser(rol,realm,first,last,usern,email,birt,addr,cell,islogged,pEncrypted,id).subscribe(y =>{
        //   this.userService.sendEmail(`Your new password is ${pass}`,"Recover Password", email).subscribe(e =>{
        //     openPlatformModalMessage("password change")
        //   });
        // });
      }
    });

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
      //let pass = Math.random().toString();
      let pEncrypted = this.encryptPassword(p.toString()).toString()
      let id = user.id;

      this.secService.putUser(rol,realm,first,last,usern,email,birt,addr,cell,islogged,pEncrypted,id).subscribe(y =>{
        this.userService.sendEmail(`Your new password is ${p}`,"Recover Password", email).subscribe(e =>{
          openPlatformModalMessage("password change")
        });
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
