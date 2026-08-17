class Student {
    // name:string ='Rafi'
    // email:string ='rafi@gmail.com'
    // age:number =16
    // marks:number = 100
    name:string
    email:string 
    age:number 
    marks:number

    constructor (name:string, email:string, age:number, marks:number){
        this.name = name
        this.email = email
        this.age = age
        this.marks = marks

    }

    getInfo(): string{
        const info = `Name: ${this.name}\n Email: ${this.email}`
        return info
    }
}

const rafi = new Student ('Rafi', 'rafi@gmail.com', 16, 100)
const sadia = new Student('Sadia', 'sadia@gmail.com', 17, 120)
// console.log(sadia.getInfo());
// console.log(sadia);


class ChaShop {
    title:string
    soldItems:any = []

    constructor(title:string){
        this.title = title
    }
    buy(name:string, price:number){
        this.soldItems.push({name, price})

    }

    totalSold(){
        const total = this.soldItems.reduce((accumulator, item) => accumulator + item.price, 0)
        return total

    }
}

const shop1 = new ChaShop ('Tea Shop')
shop1.buy('Tea', 10)
shop1.buy('Cake', 20)
console.log(shop1);
console.log(shop1.totalSold());