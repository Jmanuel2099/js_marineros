import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

//fgValidation: FormGroup;
fgV : FormGroup;

  constructor(private fb: FormBuilder) { 

  }
  
  ngOnInit() {
    this.fgvalidationBuilder();
  }
  

  fgvalidationBuilder(){
    this.fgV = this.fb.group({
      //email: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(50),Validators.email]],
      first: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
      last: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
      message: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]]
    });
  }

  sendMessage(){
    if(this.fgV.invalid){
      alert("ERROR")
    }else{
      alert("SEND MESSAGE")
    }
  }

  get fg(){
    return this.fgV.controls;
  }
  
}
