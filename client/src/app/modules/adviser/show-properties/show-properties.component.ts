import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/modeles/propertyModel';
import { PropertyService } from 'src/app/services/property.service';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

declare var  openConfirmationModal: any
declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-show-properties',
  templateUrl: './show-properties.component.html',
  styleUrls: ['./show-properties.component.css']
})
export class ShowPropertiesComponent implements OnInit {

  propertyList: PropertyModel[]= [];
  List:PropertyModel[]=[];
  idProperty:string;
  constructor(private propertyService: PropertyService, private secService: SecurityService,
              private router:Router) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties():void {
    let property:PropertyModel;
    let adviser= this.secService.getInfo()
    this.propertyService.getProperty().subscribe(p=> {
      this.propertyList=p;
      this.List = p.filter(x => x.adviser.id == adviser.userId);
    });    
  }

  openConfirmationDelete(id:string){
    console.log(id)
    this.idProperty= id
    openConfirmationModal()
  }

  deleteEvent(){
    this.propertyService.deletePrperty(this.idProperty).subscribe(p => {
      openPlatformModalMessage("DELETE PROPERTY");
    });
  }
}
