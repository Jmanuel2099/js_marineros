import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PropertyModel } from '../modeles/propertyModel';
import { RequestModel } from '../modeles/requestModel';
import { UserModel } from '../modeles/userModel';

//http://localhost:3000/api/properties
const base_url: string ='http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient ) { }

  getProperty():Observable<PropertyModel[]>{
    let properties= this.http.get<PropertyModel[]>(`${base_url}properties`);
    //console.log(properties);
    return properties;
  }
  
  createProperties(state:Boolean,dept:String,city:String,addr:String,value:Number,type:Number,VorA:Number,adv:UserModel,cont:string,img:String,vid:String):Observable<PropertyModel>{
    let body={
      state : state,
      departament: dept,
      city: city,
      address: addr,
      value: value,
      typeProperty: type,
      VorA: VorA,
      adviser: adv,
      contact: cont,
      image: img,
      video: vid
    }
    return this.http.post<PropertyModel>(`${base_url}properties`,
    body,
    { headers: new HttpHeaders({ "content-type": "application/json" }) }
    );
  }
  // getPropertyById(id:String):Observable<PropertyModel>{
  //   return this.http.get<PropertyModel>(`${base_url}properties/${id}`);
  //}


  
}
