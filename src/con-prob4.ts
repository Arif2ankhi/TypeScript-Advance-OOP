interface Item {
    name:string
    price:number
}

// type Item = {
//     name:string
//     price:number
// }

const calculateOrderTotal = (items:Item[]):number => {

    const total:number = items.reduce((sum:number, item:Item) => sum + item.price, 0)
    return total

}

console.log(calculateOrderTotal([{name:'Burger', price:1250}, {name:'Pizza', price:1200}, {name:'coke', price:200}]));