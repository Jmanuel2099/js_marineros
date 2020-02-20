export class UserModel{
    id?: String;
    user?:UserModel;
    rol:number;
    firstName: String;
    lastname: String;
    email: String;
    password: String;
    birthDate: String;
    address: String;
    cellphone: String;
    isLogged: boolean= false;
}