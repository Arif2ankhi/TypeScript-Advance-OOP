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
    getInfo() {
        const info = `Name: ${this.name}\n Email: ${this.email}`;
        return info;
    }
}
const rafi = new Student('Rafi', 'rafi@gmail.com', 16, 100);
const sadia = new Student('Sadia', 'sadia@gmail.com', 17, 120);
// console.log(sadia.getInfo());
// console.log(sadia);
class ChaShop {
    title;
    soldItems = [];
    constructor(title) {
        this.title = title;
    }
    buy(name, price) {
        this.soldItems.push({ name, price });
    }
    totalSold() {
        const total = this.soldItems.reduce((accumulator, item) => accumulator + item.price, 0);
        return total;
    }
}
const shop1 = new ChaShop('Tea Shop');
shop1.buy('Tea', 10);
shop1.buy('Cake', 20);
console.log(shop1);
console.log(shop1.totalSold());
//# sourceMappingURL=method.js.map