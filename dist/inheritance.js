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
class Student extends User {
    //    private _name: string;
    //    private _age: number;
    //    private _email: string;
    _fee;
    constructor(name, age, email, fee) {
        super(name, age, email);
        this._fee = fee;
        // this._name = name
        // this._age = age
        // this._email = email
        // this._fee = fee
    }
}
const student = new Student('Rafi', 16, 'rafi@gmail.com', 2000);
// const user = new User ('Abul', 27, 'abuk@yahoo.com')
// user.age = 30
console.log(student.age);
//# sourceMappingURL=inheritance.js.map