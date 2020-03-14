import { UserModel } from './userModel';
import { PropertyModel } from './propertyModel';

export class RequestModel{
    property: PropertyModel;
    user: UserModel;
    adviser: UserModel;
    estado: Number;// 0 para enviado, 1 para revisado, 2 para aceptado y 3 para rechazado
    message?: String;
    id?: String;
}