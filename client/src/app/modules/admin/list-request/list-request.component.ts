import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { RequestModel } from 'src/app/modeles/requestModel';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DomainService } from 'src/app/services/domain.service';
import { DoaminModel } from 'src/app/modeles/domainModel';

declare var openPlatformModalMessage: any;
@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {

  fgV: FormGroup;
  listRequest: RequestModel[]=[];
  listDomains : DoaminModel[] = [];
  listFilter: RequestModel[]=[];
  constructor(private requestSevice: RequestService, private fb: FormBuilder, private domainService: DomainService) { }

  ngOnInit() {
    this.fgValidationBuilder();
    this.getRequest();
    this.getdomain();
  }

  fgValidationBuilder(){
    this.fgV= this.fb.group({
      VorR:['',[Validators.required]],
      HorA:['',[Validators.required]], 
      dom:['',[Validators.required]]
    });
  }

  get fg(){
    return this.fgV.controls;
  }

  getRequest(){
    this.requestSevice.getRequest().subscribe(r => {
      this.listRequest= r;
      
    });
  }

  openDetails(id:String){
    //console.log(id)
    this.requestSevice.getRequestById(id).subscribe(r =>{
      console.log(r)
      openPlatformModalMessage(`Propety: ${r.property.id}. Departament: ${r.property.domain.departament} and City: ${r.property.domain.city},
       address: ${r.property.address}, value: ${r.property.value}, 
       Client: ${r.user.firstName} ${r.user.lastName},
       Adviser: ${r.adviser.firstName} ${r.adviser.lastName}`)
    });
  }

  getdomain(){
    this.domainService.getDomain().subscribe(d => {
      this.listDomains = d;
      //console.log(this.listDomains)
    })
  }

  filterEvent(){
    let saleOrRent= this.fg.VorR.value;
    let houseOrApto= this.fg.HorA.value;
    let domain = this. fg.dom.value;
    if (saleOrRent == null || houseOrApto == null || domain == null) {
      alert("You must fill in the fields");
    }else{
      this.listFilter= this.listRequest.filter(x => x.property.VorA == saleOrRent && x.property.typeProperty == houseOrApto && x.property.domain.id == domain);
      //console.log(this.listFilter)
    }
  }

}
