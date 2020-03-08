import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { SecurityService } from 'src/app/services/security.service';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-editor-property',
  templateUrl: './editor-property.component.html',
  styleUrls: ['./editor-property.component.css']
})
export class EditorPropertyComponent implements OnInit {
  code:String;
  fgV: FormGroup;
  constructor(private fb: FormBuilder, private routerActivate: ActivatedRoute, private propertyService: PropertyService,
              private secService: SecurityService, private router:Router) { }

  ngOnInit() {
    this.fgValidationBuilder();
    this.getPrpertyToEdit();
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

  getPrpertyToEdit(){
    this.code= this.routerActivate.snapshot.paramMap.get("id");
    if( this.code != null && this.code != undefined){
      this.propertyService.getPropertyById(this.code).subscribe(p=>{
        // console.log(p)
        this.fg.depto.setValue(p.departament),
        this.fg.city.setValue(p.city),
        this.fg.address.setValue(p.address),
        this.fg.val.setValue(p.value),
        this.fg.VorR.setValue(p.VorA),
        this.fg.HorA.setValue(p.typeProperty),
        this.fg.image.setValue(p.image),
        this.fg.video.setValue(p.video)
      })
    }else{
      openPlatformModalMessage("the URL is invalid");
    }
  }

  editProperty(){
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
    let id= this.code;
    this.propertyService.editProperty(departament,city,address,value,typeProperty,VorA,adviser,contac,image,video,id).subscribe(p => {
      openPlatformModalMessage("EDIT PROPERTY 🥳🥳");
      this.router.navigate(['/adviser/showProperties'])
    });
  }
}
