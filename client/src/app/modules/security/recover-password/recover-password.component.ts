import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  fgValidation: FormGroup;

  constructor(private fb: FormBuilder) { }

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

}
