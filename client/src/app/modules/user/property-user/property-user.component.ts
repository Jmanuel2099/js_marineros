import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/modeles/propertyModel';
import { PropertyService } from 'src/app/services/property.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { RequestService } from 'src/app/services/request.service';
import { RequestModel } from 'src/app/modeles/requestModel';
import { UserService } from 'src/app/services/user.service';

declare  var openPlatformModalMessage: any;

@Component({
  selector: 'app-property-user',
  templateUrl: './property-user.component.html',
  styleUrls: ['./property-user.component.css']
})
export class PropertyUserComponent implements OnInit {

  fgV: FormGroup;
  ListProperty: PropertyModel[]= [];
  listFilter :PropertyModel[]= [];
  listRequestUser: RequestModel[]= [];
  listTemp: PropertyModel[]= [];

  //recuest:Boolean=true;

  constructor(private propertyService:PropertyService, private fb: FormBuilder,
     private secService: SecurityService, private requestService: RequestService, private userService: UserService) { }

  ngOnInit() {
    
    this.fgValidationBuilder();
    this.getProperties();
    // this.getPropertiRequested();    
  }

  getProperties():void {
    let property:PropertyModel;
    this.propertyService.getProperty().subscribe(p=> {
      this.ListProperty=p;
       //console.log(p)
    });    
  }

  fgValidationBuilder(){
    this.fgV= this.fb.group({
      VorR:['',[Validators.required]],
      HorA:['',[Validators.required]]
    });
  }

  get fg(){
    return this.fgV.controls;
  }

  filterEvent(){
    let saleOrRent= this.fg.VorR.value;
    let houseOrApto= this.fg.HorA.value;
    if (saleOrRent == null || houseOrApto == null) {
      alert("You must fill in the fields");
    }else{
      this.listFilter= this.ListProperty.filter(x => x.VorA == saleOrRent && x.typeProperty == houseOrApto);
      //console.log(this.listFilter)
    }
  }

  resquestEvent(id:String){
    let property= this.listFilter.find(p => p.id == id);
    let client = this.secService.getInfo().user;
    let p ={
      state: property.state,
      departament:property.departament,
      city:property.city,
      address:property.address,
      value:property.value,
      typeProperty:property.typeProperty,
      VorA:property.VorA,
      adviser:property.adviser,
      contact:property.contact,
      image:property.image,
      video:property.video,
      id:property.id
    }
    let Advi= property.adviser;
    this.requestService.requestProperty(p,client,Advi).subscribe(r => {
      this.sendmessageConfimation(client.firstName,client.lastName,client.email,client.cellphone,
                              Advi.firstName,Advi.lastName,Advi.email,
                              property.id,property.departament,property.city,property.address,property.value)
      openPlatformModalMessage("Message sent, the advisor is notified");
    });
  }

  sendmessageConfimation(fUser:String, lUser:String, eUser:String, cUser:String,
                         fAdvi:String, lAdvi:String, eadvi:String,
                         idP:string, depP: String, cP:String, adP:string, vP:Number ){
    let subj= "Request property JSmarineros&Asociados";
    let m  = (`User ${fUser} ${lUser} Email ${eUser} cell ${cUser} property ${idP} Dept ${depP} city ${cP} Address ${adP} value ${vP}`)
    // console.log(eadvi)
    this.userService.sendEmail(m, subj, eadvi).subscribe(()=>{
    });
  }


  // getPropertiRequested(){
  //   let user = this.secService.getInfo().userId;
  //   let prequested = this.requestService.getRequest().subscribe(datas => {
  //     //console.log(datas)
  //     for (let p of datas) {
  //       if(p.user.toString() == user){// aqui me obtengo las propiedades que tiene solicitadas el usuaria que esta logeado
  //         this.listRequestUser.push(p);
  //         //console.log(this.listRequestUser)
  //       }
  //     }
  //   });
  // }
  
}
