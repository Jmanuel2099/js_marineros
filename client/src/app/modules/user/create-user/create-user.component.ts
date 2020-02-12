import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  fgVa: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgVa= this.fb.group({
      name:['',[Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      last:['',[Validators.required, Validators.minLength(4),Validators.maxLength(30)]],
      email:['',[Validators.required, Validators.minLength(6),Validators.maxLength(40),Validators.email]],
      birth:['',[Validators.required, Validators.minLength(9),Validators.maxLength(12)]],
      address:['',[Validators.required, Validators.minLength(4),Validators.maxLength(30)]],
      cell:['',[Validators.required, Validators.minLength(7),Validators.maxLength(10)]],
      password:['',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]]
    });
  }
  get fg(){
    return this.fgVa.controls;
  }
  RegisterEvent(){
    if(this.fgVa.invalid){
      alert("ERROR")
    }else{
      alert("god")
    }
  }
  getValues(){
  }
}
