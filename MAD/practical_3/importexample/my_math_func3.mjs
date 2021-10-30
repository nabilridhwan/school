// Named and Default export 
//my_math_func3.mjs 
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

export {
    divide as
    default, add, multiply
};