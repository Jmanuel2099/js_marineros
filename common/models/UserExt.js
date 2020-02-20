import { User } from "loopback";

class UserExt extends User {
    constructor(realm, firstName, lastName, username, email, birthDate, addres, cellphone, isLogged, password, rol) {
        super(realm, firstName, lastName, username, email, birthDate, addres, cellphone, isLogged, password);
        this.rol = rol;
    }
}

module.exports = UserExt