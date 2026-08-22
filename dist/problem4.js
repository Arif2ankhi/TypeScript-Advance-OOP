"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (products) => {
    const total = products.reduce((sum, item) => sum + item.price, 0);
    return total;
};
const products = [
    { name: 'keyboard', price: 1500 },
    { name: 'mouse', price: 1800 },
    { name: 'USB cable', price: 1300 }
];
console.log(calculateCartTotal(products));
//# sourceMappingURL=problem4.js.map