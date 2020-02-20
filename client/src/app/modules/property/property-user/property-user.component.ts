import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { PropertyModel } from 'src/app/modeles/propertyModel';

@Component({
  selector: 'app-property-user',
  templateUrl: './property-user.component.html',
  styleUrls: ['./property-user.component.css']
})
export class PropertyUserComponent implements OnInit {

  propertyList: PropertyModel[]= [];

  constructor(private propertyService:PropertyService) { }

  ngOnInit() {
  }

  getProperties():void {
    let property:PropertyModel;
    this.propertyService.getProperty().subscribe(p=> {
      this.propertyList=p;
      //console.log(p)
    });    
}
}
