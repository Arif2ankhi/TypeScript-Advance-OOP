"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    _age;
    _email;
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0 || value > 100) {
            throw new Error('Age is not valid!');
        }
        this._age = value;
    }
}
const user = new User('Abul', 27, 'abuk@yahoo.com');
user.age = 30;
console.log(user.age);
//# sourceMappingURL=getter-setter.js.map