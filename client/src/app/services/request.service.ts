import { Injectable } from '@angular/core';
import { RequestModel } from '../modeles/requestModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertyModel } from '../modeles/propertyModel';
import { UserModel } from '../modeles/userModel';

const base_url : string ='http://localhost:3000/api/recuests'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  requestProperty(p:PropertyModel, u:UserModel, a:UserModel):Observable<RequestModel>{
    let estado: Number = 0;
    let bodyPost= {
      property: p,
      user: u,
      adviser: a,
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

  getRequestById(id:String):Observable<RequestModel>{
    return this.http.get<RequestModel>(`${base_url}/${id}`)
  }

  deleteRequest(id:String):Observable<RequestModel>{
    let url =`${base_url}/${id}`
    //console.log(url);
    return this.http.delete<RequestModel>(url);
  }

  putRequest(p:PropertyModel,u:UserModel,a:UserModel,e:Number, m:String,id:String):Observable<RequestModel>{
    let body_Put= {
      property: p,
      user: u,
      adviser: a,
      estado: e,
      message: m,
      id: id
    }
    return this.http.put<RequestModel>(base_url,
       body_Put);
  }
}
