export class UserModel{
    id?: String;
    user?:UserModel;
    rol:number;
    firstName: String;
    lastName: String;
    email: String;
    password ?: String;
    birthDate: String;
    address: String;
    cellphone: String;
    numberRequest:Number;
    realm ?: String;
    username?:String;
    
    isLogged: boolean= false;
}