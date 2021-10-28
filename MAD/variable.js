const num1 = 5.5;
var x = 7;

function testFunction(){

    // the num1 below is different from the num1 above because it is a local variable that is block scoped and it is not accessible outside of the function
    const num1 = 6.5;
    return x + num1;
}

// let z = 5;

if(num1 <= 5.5){
    var y = 8;
    const num3 = 6;
    let z = 10;
}else{
    var y = 5;
}

console.log(y); // 8
console.log(num3) // undefined because it is block scoped and anything outside the block cannot access the value
console.log(z) // undefined also because block scope