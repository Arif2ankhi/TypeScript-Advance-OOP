"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    // name:string ='Rafi'
    // email:string ='rafi@gmail.com'
    // age:number =16
    // marks:number = 100
    name;
    email;
    age;
    marks;
    constructor(name, email, age, marks) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
    }
}
// const rafi = new Student ('Rafi', 'rafi@gmail.com', 16, 100)
const sadia = new Student('Sadia', 'sadia@gmail.com', 17, 120);
console.log(sadia);
//# sourceMappingURL=class.js.map