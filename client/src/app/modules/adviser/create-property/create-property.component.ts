import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { PropertyService } from 'src/app/services/property.service';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {

  fgV: FormGroup;
  constructor(private fb: FormBuilder, private secService: SecurityService, private PropertyService: PropertyService) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder() {
    this.fgV = this.fb.group({
      depto:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      city:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
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
  CreateEvent(){
      let state: Boolean= false;
      let departament = this.fg.depto.value;
      let city = this.fg.city.value;
      let address= this.fg.address.value;
      let value= this.fg.val.value;
      let typeProperty= this.fg.HorA.value;
      let VorA= this.fg.VorR.value;
      let adviser= this.secService.getInfo().user;
      let contac= adviser.cellphone.toString();
      let image= this.fg.image.value;
      let video= this.fg.video.value;
      this.PropertyService.createProperties(state,departament,city,address,value,typeProperty,VorA,adviser,contac,image,video).subscribe(p => {
        openPlatformModalMessage("Created Property 👍")
      });
    } 
  
}
