import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { RequestService } from 'src/app/services/request.service';
import { RequestModel } from 'src/app/modeles/requestModel';
import { PropertyModel } from 'src/app/modeles/propertyModel';
import { PropertyService } from 'src/app/services/property.service';

declare var openConfirmationModal: any;
declare var openImageModal: any;
declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-list-request-user',
  templateUrl: './list-request-user.component.html',
  styleUrls: ['./list-request-user.component.css']
})
export class ListRequestUserComponent implements OnInit {

  listRequestUser: RequestModel[]=[];
  listProperties: PropertyModel[]=[];
  listTemp: PropertyModel[]=[];
  state:Number;
  image:String;
  idProperty:String;

  constructor(private secService: SecurityService, private requestService: RequestService,
              private propertyService: PropertyService) { }

  ngOnInit() {
    this.getPropertiRequestedUser();
    this.getState()
  }

  
  getPropertiRequestedUser(){
    let user = this.secService.getInfo().userId;
    let prequested = this.requestService.getRequest().subscribe(datas => {
      //console.log(datas)
      this.listRequestUser = datas.filter(r => r.user.id == user);
    });
  }

  getState(){
    this.requestService.getRequest().subscribe(r => {
      //console.log(r)
      r.forEach(x => {
        this.state = x.estado ;
        //console.log(this.state)
      });
    });
  }
  
  openModalConfimartion(id:string){
    console.log(id)
    this.idProperty= id
    openConfirmationModal()
  }

  deleteEvent(){
    this.requestService.getRequest().subscribe(recuests => {
      // console.log(recuests)
      recuests.forEach(r => {
        if(r.estado == 0){
         //console.log(this.idProperty)
          if (r.property.id == this.idProperty) {
          //console.log(r.id)
        this.requestService.deleteRequest(r.id).subscribe(()=> {}); 
          }
        }else{
          openPlatformModalMessage("Request is in reviw")
        }
      }); 
    });
  }

  openModalImage(i:String){
    this.image= i
    openImageModal()
  }
}
