// type User = {
//     name: string
//     age:number
//     city: string
// }

interface User {
    name:string
    age:number
    city: string
}


const formatUserprofile = (user:User):string =>{
    return `${user.name} is ${user.age} years old liven in ${user.city}`

}
console.log(formatUserprofile({
    name:'Fahim',
    age: 22,
    city:'Dhaka'
}));