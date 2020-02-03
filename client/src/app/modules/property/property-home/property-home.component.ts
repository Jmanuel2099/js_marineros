import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/modeles/propertyModel';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-home',
  templateUrl: './property-home.component.html',
  styleUrls: ['./property-home.component.css']
})
export class PropertyHomeComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  propertyList: PropertyModel[]= [];  

  ngOnInit() {
    this.getProperties();
  }

  getProperties():void {
    this.propertyService.getProperty().subscribe(p=> {
      this.propertyList=p;
      console.log(p)
    });
  //console.log(this.propertyList);    
}
}
