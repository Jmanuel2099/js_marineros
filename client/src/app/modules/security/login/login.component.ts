import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
//import { sha256, sha224 } from 'sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation: FormGroup;

  constructor(private fb: FormBuilder, private secService: SecurityService,
              private router:Router) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgValidation= this.fb.group({
      username:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email]],
      password:['',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]]
    });
  }
  
  get fg(){
    return this.fgValidation.controls;
  }

  loginEvent(){ 
    if(this.fgValidation.invalid){
      alert("Error data")
    }else{
    let u= this.fg.username.value;
    let p= this.fg.password.value;
    let pEncrypted= this.encryptPassword(p).toString();
    //console.log(pEncrypted);
    //console.log(p);
    this.secService.loginUser(u,pEncrypted).subscribe(data =>{
      if(data != null){
        //console.log(data);
        this.secService.saveLoginUser(data); 
        this.router.navigate(['/home']);
      }else{
        alert("algo salio mal con el login");
      }
    });
    }
  }  

  encryptPassword(pass:string) {   
    var hash=CryptoJS.SHA256(pass);
    // alert(hash.toString()) ;
    var encrypted= CryptoJS.SHA256(hash);
    // alert(encrypted)
    return encrypted;
  }

 

}
