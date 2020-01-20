import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

fgValidation: FormGroup;

  constructor(private fb: FormBuilder) { 

  }
  
  ngOnInit() {
    //this.fgvalidationBuilder();
  }
  

  /*fgvalidationBuilder(){
    this.fgValidation = this.fb.group({
      email: ['aaa',[Validators.required,Validators.minLength(5),Validators.maxLength(50),Validators.email]],
      message: ['bbb',[Validators.required,Validators.minLength(3),Validators.maxLength(700)]]
    });
  }

  sendMessage(){
    if(this.fgValidation.invalid){
      alert("ERROR")
    }else{
      alert("SEND MESSAGE")
    }
  }

  get fg(){
    return this.fgValidation.controls;
  }
  */
}
