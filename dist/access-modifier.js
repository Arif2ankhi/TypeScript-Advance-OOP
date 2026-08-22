"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BikashAccount {
    phone;
    balance;
    pin;
    history = [];
    constructor(phone, balance, pin) {
        this.phone = phone;
        this.balance = balance;
        this.pin = pin;
    }
    getBalance(pin) {
        if (this.pin === pin) {
            return this.balance;
        }
        return `Pin is wrong`;
    }
}
const bkashAcc = new BikashAccount('01234567', 5000, 123);
// bkashAcc.balance = 0
// bkashAcc.history
console.log(bkashAcc.getBalance(123));
//# sourceMappingURL=access-modifier.js.map