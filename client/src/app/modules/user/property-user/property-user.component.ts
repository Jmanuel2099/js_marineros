import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/modeles/propertyModel';
import { PropertyService } from 'src/app/services/property.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-property-user',
  templateUrl: './property-user.component.html',
  styleUrls: ['./property-user.component.css']
})
export class PropertyUserComponent implements OnInit {

  fgV: FormGroup;
  ListProperty: PropertyModel[]= [];
  listFilter :PropertyModel[]= [];

  constructor(private propertyService:PropertyService, private fb: FormBuilder, private secService: SecurityService) { }

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
    }
  }

  rescuestEvent(){
    let client = localStorage.getItem("activeUser");
    let u= client
  }
}
