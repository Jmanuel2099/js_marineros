import { UserModel } from './userModel';

export class LoginModel{
    id:String;
    ttl:String;
    created:String;
    userId:String;
    user:UserModel;
    isLogged:boolean=false;
}