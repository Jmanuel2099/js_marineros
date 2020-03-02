import { UserModel } from './userModel';
import { PropertyModel } from './propertyModel';

export class RequestModel{
    property: PropertyModel;
    user: UserModel;
    adviser: UserModel;
    state: boolean;
    id?: String;
}