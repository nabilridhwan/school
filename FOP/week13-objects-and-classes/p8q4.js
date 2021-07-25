/*
    Name: Nabil Ridhwanshah Bin Rosli
    ID: 2007421
*/

class Fan{
    constructor(speed, on){
        this.speed = speed;
        this.on = on
    }

    getState(){
        var wordSpeed;
        switch (this.speed) {
            case 1:
                wordSpeed = "slow"
                break;
            case 2:
                wordSpeed = "medium"
                break;
            case 3:
                wordSpeed = "fast"
                break;
            default:
                wordSpeed = "unknown"
                break;
        }

        if(this.on){
            return "on at " + wordSpeed + " speed"
        }

        return "off"
    }
}

var fan1 = new Fan(1, true)
var fan2 = new Fan(3, true)

console.log("Fan 1 is " + fan1.getState())
console.log("Fan 2 is " + fan2.getState())

fan1.on = false;
fan2.speed = 2;

console.log("Fan 1 is " + fan1.getState())
console.log("Fan 2 is " + fan2.getState())