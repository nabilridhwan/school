function helloWorld(){
    return "Hello World";
}

// Arrow functions
var hello2 = function(){
    return "Hello World";
}

// More shorter arrow function
var hello3 = () => {
    return "Hello World";
}

// SHORT SHORT FORM (omit the return keyword because it is implied)
// Mostly one-liners
var hello4 = () => "Hello World";

// One parameter can remove the bracket but usually we dont for visibility;
var hello5 = myName => "Hello " + myName;

// Two parameters or more needs the bracket!
var add = (number1, number2) => number1 + number2;

console.log(hello5("Nabil")) // Hello Nabil
console.log(add(1,2)) // 3