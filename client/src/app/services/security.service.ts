import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  usserLoged:boolean = false;

  constructor() { 

  }
 
isUsserLoged(){
  return this.usserLoged;
}

loginUser(user:string, pass:string){
  let u=null;
  if(user=="jose@gmail.com"&& pass=="1234567890"){
    u= {name:"jose Manuel", age:20, ocupation:"Student"};
    this.usserLoged= true;
  }
  return u;
}
}
