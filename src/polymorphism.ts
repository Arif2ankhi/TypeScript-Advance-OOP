class Animal {
    private _name;
    constructor (name:string){
        this._name = name
    }

    makeSound():void {
        console.log('Animal can make sound');
    }
}

class Cat extends Animal{

makeSound(): void {
    // console.log('Meowwwwwwww');
    
}


}


class Dog extends Animal{

makeSound(): void {
    // console.log('Whoof Whoof ');
    
}


}


// const dog = new Dog ('Moti')
// dog.makeSound();


class Shape {
    area(): number {
        return 0
    }
}

class Circle extends Shape {
    radius : number 

    constructor (radius: number ){
        super()
        this.radius = radius

    }
    area():number {
        return 3.1416 * this.radius * this.radius

    }
        
}


class Rectangle extends Shape {
    height: number
    width: number

    constructor( height: number, width: number){
        super()
        this.height = height 
        this.width = width
    }

    area(): number {
        return this.height * this.width
    }

}


const circle = new Circle(5)
// console.log(circle.area());



const rectangle = new Rectangle (4, 5)
console.log(rectangle.area());