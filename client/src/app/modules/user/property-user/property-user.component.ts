import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/modeles/propertyModel';
import { PropertyService } from 'src/app/services/property.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-property-user',
  templateUrl: './property-user.component.html',
  styleUrls: ['./property-user.component.css']
})
export class PropertyUserComponent implements OnInit {

  fgV: FormGroup;
  ListProperty: PropertyModel[]= [];
  listFilter :PropertyModel[]= [];

  constructor(private propertyService:PropertyService, private fb: FormBuilder,
     private secService: SecurityService, private requestService: RequestService) { }

  ngOnInit() {
    
    this.fgValidationBuilder();
    this.getProperties();    
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
    //console.log(saleOrRent+' and '+houseOrApto);
    if (saleOrRent == null || houseOrApto == null) {
      alert("You must fill in the fields");
    }else{
      this.listFilter= this.ListProperty.filter(x => x.VorA == saleOrRent && x.typeProperty == houseOrApto);
      console.log(this.listFilter)
    }
  }

  resquestEvent(id:String){
    //console.log(id);
    let property= this.listFilter.find(p => p.id == id);
    let idClient = this.secService.getInfo().userId;
    //console.log(idClient)
    let idProperty= property.id
    //console.log(property)
    let idAdvi= property.adviser;
    this.requestService.requestProperty(idProperty,idClient,idAdvi).subscribe(r => {
      alert("Request made =)");
    });
  }

  
}
