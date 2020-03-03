import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/modeles/propertyModel';
import { PropertyService } from 'src/app/services/property.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { RequestService } from 'src/app/services/request.service';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-property-user',
  templateUrl: './property-user.component.html',
  styleUrls: ['./property-user.component.css']
})
export class PropertyUserComponent implements OnInit {

  fgV: FormGroup;
  ListProperty: PropertyModel[]= [];
  listFilter :PropertyModel[]= [];
  listRequestUser: PropertyModel[]= [];
  listTemp: PropertyModel[]= [];

  //recuest:Boolean=true;

  constructor(private propertyService:PropertyService, private fb: FormBuilder,
     private secService: SecurityService, private requestService: RequestService) { }

  ngOnInit() {
    
    this.fgValidationBuilder();
    this.getProperties();
    this.getPropertiRequested();    
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

  getPropertiRequested(){
    let user = this.secService.getInfo().userId;
    let prequested = this.requestService.getRequest().subscribe(datas => {
      for (let p of datas) {
        if(p.user.toString() == user){// aqui me obtengo las propiedades que tiene solicitadas el usuaria que esta logeado
          this.listRequestUser.push(p.property);
          //console.log(this.listRequestUser)
        }
      }
      
      // for (let p of this.ListProperty) {
      //   for (let r of this.listRequestUser) {
        
      //     if (p.id != r.toString()){
      //       this.listTemp.push(p);
      //       console.log(this.listTemp)
      //     }
      //   }
      // }
    });


  }

  resquestEvent(id:String){
    let property= this.listFilter.find(p => p.id == id);
    let idClient = this.secService.getInfo().userId;
    let idProperty= property.id
    let idAdvi= property.adviser;
    this.requestService.requestProperty(idProperty,idClient,idAdvi).subscribe(r => {
      alert("Request made =)");
    });
  }

  
}
