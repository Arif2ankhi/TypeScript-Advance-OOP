"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    _name;
    constructor(name) {
        this._name = name;
    }
    makeSound() {
        console.log('Animal can make sound');
    }
}
class Cat extends Animal {
    makeSound() {
        // console.log('Meowwwwwwww');
    }
}
class Dog extends Animal {
    makeSound() {
        // console.log('Whoof Whoof ');
    }
}
// const dog = new Dog ('Moti')
// dog.makeSound();
class Shape {
    area() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return 3.1416 * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}
const circle = new Circle(5);
// console.log(circle.area());
const rectangle = new Rectangle(4, 5);
console.log(rectangle.area());
//# sourceMappingURL=polymorphism.js.map