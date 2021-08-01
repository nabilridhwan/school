/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/

class Square{
    constructor(length){
        this.length = length;
    }

    calculateArea(){
        return this.length ** 2;
    }
}


let sqArray = new Array(10);

for(let i = 0; i < 10; i++){
    // Generate a random number between 10 and 20 inclusive
    let randomLength = Math.floor(Math.random() * 20) + 10;
    sqArray[i] = new Square(randomLength);
}

/* Or alternatively:
    let sqArray = [];
    for(let i = 0; i < 10; i++){
        let randomLength = Math.floor(Math.random() * 20) + 10;
        sqArray.push(new Square(randomLength));
    }
*/

console.log("Length\tArea");
// iterate through sqArray
for(let i = 0; i < sqArray.length; i++){
    console.log(sqArray[i].length + "\t" + sqArray[i].calculateArea().toFixed(1));
}