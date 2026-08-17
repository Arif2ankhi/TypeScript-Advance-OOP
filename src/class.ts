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
}

// const rafi = new Student ('Rafi', 'rafi@gmail.com', 16, 100)
const sadia = new Student('Sadia', 'sadia@gmail.com', 17, 120)
console.log( sadia);