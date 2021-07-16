/*
    Name: Nabil Ridhwanshah Bin Rosli
    ID: 2007421
*/

class BankAccount{
    constructor(name, savings){
        this.name = name;
        this.savings = savings;
    }

    getBalance(){
        return this.name + " has $" + this.savings.toFixed(2)
    }
}

var oliver = new BankAccount("Oliver Twist", 1000.00)
var richie = new BankAccount("Riche Rich", 100000.00)

console.log(oliver.getBalance())
console.log(richie.getBalance())