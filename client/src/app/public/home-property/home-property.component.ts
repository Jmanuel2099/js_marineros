import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { PropertyModel } from 'src/app/modeles/propertyModel';

@Component({
  selector: 'app-home-property',
  templateUrl: './home-property.component.html',
  styleUrls: ['./home-property.component.css']
})
export class HomePropertyComponent implements OnInit {

  
  propertyList: PropertyModel[]= [];
  ListSale:PropertyModel[]=[];  
  ListRent:PropertyModel[]=[];
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties():void {
    let property:PropertyModel;
    this.propertyService.getProperty().subscribe(p=> {
      this.propertyList=p;
      this.ListSale = p.filter(x => x.VorA ==0);
      this.ListRent = p.filter(x=> x.VorA==1);
    });    
}
}
