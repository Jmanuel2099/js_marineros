import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PropertyModel } from '../modeles/propertyModel';
import { RequestModel } from '../modeles/requestModel';

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
  
  // getPropertyById(id:String):Observable<PropertyModel>{
  //   return this.http.get<PropertyModel>(`${base_url}properties/${id}`);
  //}


  
}
