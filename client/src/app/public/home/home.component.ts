import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fgV : FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.fgvalidationBuilder();
  }

  fgvalidationBuilder(){
    this.fgV = this.fb.group({
      first: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      last: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      email:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email]],
      cell:['',[Validators.required, Validators.minLength(7),Validators.maxLength(10)]],
      request:['',[Validators.required,Validators.minLength(4),Validators.maxLength(5)]],
      message: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(200)]]
    });
  }
  sendMessage(){
    let e= this.fg.email.value;
    let m= this.getMessage();
    if(this.fgV.invalid){
      alert("ERROR")
    }else{
      alert("terminar el envio del mensaje");;
      //this.userService.sendEmail(m,e);
    }
  }
  getMessage(){
    let firstName= this.fg.first.value;
    let lastName= this.fg.last.value;
    let email= this.fg.email.value;
    let cell= this.fg.cell.value;
    let request= this.fg.request.value;
    let message= this.fg.message.value;
    return `Client ${firstName} ${lastName} E-mail: ${email},CellPhone: ${cell}, Request: ${request}, Description ${message}`
  }
  get fg(){
    return this.fgV.controls;
  }

}
