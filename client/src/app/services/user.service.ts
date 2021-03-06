import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailModel } from '../modeles/emailModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:string="http://localhost:3000/api/usuarios";

  constructor( private http: HttpClient) { }

sendEmail(mensaje: String, asunto: String, Email: String):Observable<EmailModel>{
  return this.http.get<EmailModel>(
    `${this.baseURL}/sendEmail?message=${mensaje}&subject=${asunto}&emailAddresses=${Email}`);
  }
}
 