import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

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
    this.secService.loginUser(u,pEncrypted).subscribe(data =>{
      if(data != null){
        this.secService.saveLoginUser(data);
        if(data.user.rol==1){
          console.log("hello, i am admin")
          this.router.navigate(['/home']);
        }else if(data.user.rol==2){
          console.log("hello, i am as")
          this.router.navigate(['/home']);
        }else if(data.user.rol==3){
          console.log("hello, i am client")
          this.router.navigate(['/property/PropertyUser']);
        }else{
          alert("Rol Invalid!")
        }
      }else{
        alert("ERROR in login");
      }
    });
    }
  }  

  encryptPassword(pass:string) {   
    var hash=CryptoJS.SHA256(pass);
    var encrypted= CryptoJS.SHA256(hash);
    return encrypted;
  }
}
