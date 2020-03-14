import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PropertyModel } from '../modeles/propertyModel';
import { RequestModel } from '../modeles/requestModel';
import { UserModel } from '../modeles/userModel';

//http://localhost:3000/api/properties
const base_url: string ='http://localhost:3000/api/properties'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient ) { }

  getProperty():Observable<PropertyModel[]>{
    let properties= this.http.get<PropertyModel[]>(`${base_url}`);
    //console.log(properties);
    return properties;
  }

  getPropertyById(id:String):Observable<PropertyModel>{
    return this.http.get<PropertyModel>(`${base_url}/${id}`);
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
    console.log(body)
    return this.http.post<PropertyModel>(`${base_url}`,
    body,
    { headers: new HttpHeaders({ "content-type": "application/json" }) }
    );
  }

  editProperty(dep:String,cit:String,addr:String,val:Number,type:Number,VorA:Number,advi:UserModel,cell:String,img:String,Vid:String,id:String):Observable<PropertyModel>{
    let body_Put= {
      state: false,
      departament:dep ,
      city: cit,
      address: addr,
      value: val,
      typeProperty: type,
      VorA: VorA,
      adviser: advi,
      contact: cell,
      image: img,
      video: Vid,
      id: id
    }
    return this.http.put<PropertyModel>(base_url,
      body_Put)
  }

  deletePrperty(code:String):Observable<PropertyModel>{
    let url =`${base_url}/${code}`
    console.log(code)
    return this.http.delete<PropertyModel>(url)
  }
}
