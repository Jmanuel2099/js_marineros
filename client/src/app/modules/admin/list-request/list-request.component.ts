import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { RequestModel } from 'src/app/modeles/requestModel';

declare var openPlatformModalMessage: any;
@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {

  listRequest: RequestModel[]=[];
  constructor(private requestSevice: RequestService) { }

  ngOnInit() {
    this.getRequest();
  }

  getRequest(){
    this.requestSevice.getRequest().subscribe(r => {
      this.listRequest= r;
    });
  }

  openDetails(id:String){
    console.log(id)
    this.requestSevice.getRequestById(id).subscribe(r =>{
      openPlatformModalMessage(`Propety: ${r.property.id}. Departament: ${r.property.departament} and City: ${r.property.city},
       address: ${r.property.address}, value: ${r.property.value}, 
       Client: ${r.user.firstName} ${r.user.lastName},
       Adviser: ${r.adviser.firstName} ${r.adviser.lastName}`)
    });
  }

}
