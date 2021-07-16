/*
    Name: Nabil Ridhwanshah Bin Rosli
    ID: 2007421
*/

class Clock{
    constructor(hour, minutes){
        this.hour = hour;
        this.minutes = minutes;
    }

    displayTime(){
        console.log(this.hour + ":" + this.minutes)
    }
}

var midnight = new Clock(2,3)
console.log(midnight.displayTime())