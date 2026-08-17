class BikashAccount {
    public phone:string
   private balance:number
    private pin:number
    protected history:any = []

    constructor(phone:string, balance:number, pin:number){
        this.phone= phone
        this.balance= balance
        this.pin= pin
    }

     getBalance(pin:number) {
        if(this.pin === pin){
            return this.balance
        }
        return `Pin is wrong`
    }
}

const bkashAcc = new BikashAccount('01234567', 5000, 123)
// bkashAcc.balance = 0
// bkashAcc.history
console.log(bkashAcc.getBalance(123));