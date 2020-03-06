import { UserModel } from './userModel';

export class PropertyModel{
    state:boolean;
    departament:string;
    city:string;
    address:string;
    value:number;
    typeProperty:number;//0 para casa 1 para apto
    VorA:number;//venta es 0 y arriendo es 1
    adviser:UserModel;
    contact:string;
    image:string;
    video:string;
    id?:string;
}