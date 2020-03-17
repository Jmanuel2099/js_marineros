import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { PropertyService } from 'src/app/services/property.service';
import { DomainService } from 'src/app/services/domain.service';
import { DoaminModel } from 'src/app/modeles/domainModel';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {

  fgV: FormGroup;
  listDomains:DoaminModel[]= [];
  domain:DoaminModel;
  constructor(private fb: FormBuilder, private secService: SecurityService, private PropertyService: PropertyService,
    private domainService:DomainService) { }

  ngOnInit() {
    this.fgValidationBuilder();
    this.getdomain();
  }

  fgValidationBuilder() {
    this.fgV = this.fb.group({
      dom:['',[Validators.required]],
      address:['',[Validators.required, Validators.minLength(4),Validators.maxLength(30)]],
      val:['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      VorR:['',[Validators.required]],
      HorA:['',[Validators.required]],
      image:['',[Validators.required]],
      video:['',[]]
    });
  }
  get fg() {
    return this.fgV.controls;
  }

  getdomain(){
    this.domainService.getDomain().subscribe(d => {
      this.listDomains = d;
      //console.log(this.listDomains)
    })
  }
  CreateEvent(){
      this.domainService.getDomainById(this.fg.dom.value).subscribe(d =>{
        let state: Boolean= false;
        let address= this.fg.address.value;
        let value= this.fg.val.value;
        let typeProperty= this.fg.HorA.value;
        let VorA= this.fg.VorR.value;
        let adviser= this.secService.getInfo().user;
        let contac= adviser.cellphone.toString();
        let image= this.fg.image.value;
        let video= this.fg.video.value;
        this.PropertyService.createProperties(state,d,address,value,typeProperty,VorA,adviser,contac,image,video).subscribe(p => {
          openPlatformModalMessage("Created Property 👍")
        });
      });    
    } 
  
}
