import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/modeles/userModel';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  fgValidation: FormGroup;
  listUsers:UserModel[]=[];

  constructor(private fb: FormBuilder, private secService: SecurityService) { }

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
    for (const e of this.listUsers) {
      if(e.email==email){
         
      }
    }

  }
  get users(){
    return this.secService.getUser().subscribe(u=> 
      this.listUsers= u);
  }
}
