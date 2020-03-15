import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { DomainService } from 'src/app/services/domain.service';
import { Router } from '@angular/router';

declare var openPlatformModalMessage: any;
@Component({
  selector: 'app-create-domain',
  templateUrl: './create-domain.component.html',
  styleUrls: ['./create-domain.component.css']
})
export class CreateDomainComponent implements OnInit {

  fgV: FormGroup;
  constructor(private fb: FormBuilder, private secService: SecurityService, private domainservice: DomainService,
    private router: Router) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder() {
    this.fgV = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      message: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(300)]],
      Depto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      city: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(9)]]
    });
  }
  get fg() {
    return this.fgV.controls;
  }
  CreateNewDomain(){
    let name= this.fg.name.value;
    let des= this.fg.message.value;
    let depto = this.fg.Depto.value;
    let city = this.fg.city.value;
    let admi = this.secService.getInfo().user
    
    this.domainservice.createDomain(name,des,depto,city,admi).subscribe(d => {
      openPlatformModalMessage("New Doamin was created");
      this.router.navigate(['/admin/homeAdmin'])
    });
  }
}
