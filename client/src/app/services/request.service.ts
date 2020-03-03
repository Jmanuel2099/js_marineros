import { Injectable } from '@angular/core';
import { RequestModel } from '../modeles/requestModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertyModel } from '../modeles/propertyModel';

const base_url : string ='http://localhost:3000/api/recuests'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  requestProperty(p:String, u:String, a:String):Observable<RequestModel>{
    let estado: Number = 0;
    let bodyPost= {
      property: p.trim(),
      user: u.trim(),
      adviser: a.trim(),
      estado: estado
    }; 
    return this.http.post<RequestModel>(`${base_url}`,
     bodyPost,
     { headers: new HttpHeaders({ "content-type": "application/json" }) }
     );
  }

  getRequest():Observable<RequestModel[]>{

    let request= this.http.get<RequestModel[]>(`${base_url}`);
    return request;
  }
}
