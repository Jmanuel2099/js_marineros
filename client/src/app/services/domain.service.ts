import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoaminModel } from '../modeles/domainModel';
import { UserModel } from '../modeles/userModel';

const base_url: string ='http://localhost:3000/api/domains'

@Injectable({
  providedIn: 'root'
})
export class DomainService {


  constructor(private http: HttpClient) { }

  createDomain(n:String,des:String, dep:String, c:String, a:UserModel):Observable<DoaminModel>{
    let body_Post={
      name: n,
      description: des,
      departament: dep,
      city: c,
      admin: a 
    }
    return this.http.post<DoaminModel>(base_url,
      body_Post,
      { headers: new HttpHeaders({ "content-type": "application/json" }) }
      );
  }

  getDomain():Observable<DoaminModel[]>{
    let domains =this.http.get<DoaminModel[]>(base_url);
    return domains;
  }
  getDomainById(id:String):Observable<DoaminModel>{
    return this.http.get<DoaminModel>(`${base_url}/${id}`);
  }
}
