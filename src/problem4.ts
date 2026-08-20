type Product = {
    name: string
    price:number
}



const calculateCartTotal = (products:Product[]):number => {

    const total:number = products.reduce((sum, item) => sum + item.price, 0)
    return total

}
const products = [
    {name: 'keyboard', price: 1500},
    {name: 'mouse', price: 1800},
    {name: 'USB cable', price: 1300}
]


console.log(calculateCartTotal(products));