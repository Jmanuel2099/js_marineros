import { UserModel } from './userModel';
import { PropertyModel } from './propertyModel';

export class Recuest{
    property: PropertyModel;
    user: UserModel;
    adviser: UserModel;
    state: boolean;
    description: String;
}