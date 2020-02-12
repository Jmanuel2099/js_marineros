import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:string="http://localhost:3000/api/usuarios/";

  constructor( private http: HttpClient) { }

  sendMessageHome(message){
    let subject="JSmarineros&asociados"
    let emailAddres="jsmarinerosasociados@gmail.com";
    let mess= this.http.get(`${this.baseURL}`)
  }
}
