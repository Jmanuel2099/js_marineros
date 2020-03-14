import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { SecurityService } from 'src/app/services/security.service';
import { RequestModel } from 'src/app/modeles/requestModel';
import { PropertyModel } from 'src/app/modeles/propertyModel';
import { PropertyService } from 'src/app/services/property.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

declare var openPlatformModalMessage: any;
declare var openModalMessageDejected : any;
declare var openConfirmationModal : any;

@Component({
  selector: 'app-request-adviser',
  templateUrl: './request-adviser.component.html',
  styleUrls: ['./request-adviser.component.css']
})
export class RequestAdviserComponent implements OnInit {

  listRequestUser: RequestModel[]=[];
  listTemp: PropertyModel[]=[];
  idRequest:String;
  fgV : FormGroup;

  constructor(private requestService: RequestService, private secService: SecurityService, 
              private propertyService: PropertyService, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.getRequestedAdviser();
    this.fgvalidationBuilder();
  }

  getRequestedAdviser(){
    let user = this.secService.getInfo().userId;
    let prequested = this.requestService.getRequest().subscribe(datas => {
      this.listRequestUser = datas.filter(r => r.adviser.id == user);
    });
  }

  openModalComments(id:String){
    this.idRequest= id;
    openModalMessageDejected();
  }

  openConfirmationInAccepted(id:string){
    console.log(id)
    this.idRequest= id
    openConfirmationModal()
  }

  putInStudy(id:string){
    this.idRequest= id;
    let state = 1;
    let message = "This requets will Study, await your response";
    this.changeStateRequest(this.idRequest,state, message);
  }

  putAccepted(){
    let state = 2;
    let message = `You just accepted the request ${this.idRequest}`;
    let subject= "Answer Request JSmarineros";
    let email = this.listRequestUser.find(r => r.id == this.idRequest).user.email
    this.changeStateRequest(this.idRequest,state,message);
    this.userService.sendEmail(message,subject,email).subscribe(()=>{});
  }

  putRejected(){
    let state = 3;
    let message = `you just rejected the recuest ${this.idRequest}`;
    let subject= "Answer Request JSmarineros";
    let email = this.listRequestUser.find(r => r.id == this.idRequest).user.email
    this.changeStateRequest(this.idRequest, state,message)
    this.userService.sendEmail(message,subject,email).subscribe(()=>{});
  }

  changeStateRequest(id:String, state: Number, message:String){
    //console.log(id)
    let request= this.listRequestUser.find(r => r.id == id)
    let p = request.property;
    let u = request.user;
    let a = request.adviser;
    let e = state; 
    let i =request.id;
    let m = this.fg.message.value;
    this.requestService.putRequest(p,u,a,e,m,i).subscribe( x=> {
      openPlatformModalMessage(message)
    });
  }

  fgvalidationBuilder(){
    this.fgV = this.fb.group({
      message: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(200)]]
    });
  }

  get fg(){
    return this.fgV.controls;
  }
}
