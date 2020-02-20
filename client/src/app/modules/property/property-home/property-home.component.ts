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
  ListSale:PropertyModel[]=[];  
  ListRent:PropertyModel[]=[];
  

  ngOnInit() {
    this.getProperties();
    //this.rentOrSale();
  }

  getProperties():void {
    let property:PropertyModel;
    this.propertyService.getProperty().subscribe(p=> {
      this.propertyList=p;
      
      for (let pro of this.propertyList) {
        //console.log(pro);
        if (pro.VorA==0) {
          this.ListSale.push(pro);
         //console.log(pro);
        }
        if(pro.VorA==1){
          this.ListRent.push(pro);
          //console.log(pro);
        }
        if(pro.VorA!=0 && pro.VorA!=1){
          alert("or sale is 0 and for rent is 1");
        }
    }
      //console.log(p)
    });    
}
  /*rentOrSale(){
    for (let p of this.propertyList) {
      console.log(p);
      if (p.VorA==0) {
        this.ListSale.push(p);
        console.log(p);
      }if(p.VorA==1){
        this.ListRent.push(p);
        console.log(p);
      }else{
        alert("or sale is 0 and for rent is 1");
      }
  }
}*/

}