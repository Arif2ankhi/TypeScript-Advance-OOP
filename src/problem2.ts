const getStockStatus = (stock:number):string => {
    if (stock === 0){
        return 'Out of Stock'
    }else if (stock >=1 && stock <= 5){
        return 'Almost sold out'

    }else if (stock >=6 && stock <= 20){
        return 'Available'
}
return 'In Stock'

}

console.log(getStockStatus(0));
console.log(getStockStatus(1));
console.log(getStockStatus(5));
console.log(getStockStatus(11));
console.log(getStockStatus(21));