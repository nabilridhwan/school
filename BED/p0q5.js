/*
    P2007421
    Nabil Ridhwanshah
    DIT/FT/1B/05
*/

function fib(n){
    let fibArray = [0,1]

    for(let i = 2; i < n+1; i++){
        fibArray[i] = (fibArray[i-1] + fibArray[i-2])
    }

    return fibArray[n]
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))