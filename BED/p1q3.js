/*
    P2007421
    Nabil Ridhwanshah
    DIT/FT/1B/05
*/

function multiplicationTable(n){
    let arr = [];
    let temporaryArray = [];
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < n+1; j++){
            temporaryArray.push(j*i)
        }

        arr.push(temporaryArray)
        temporaryArray = [];
    }

    return arr
}

console.log(multiplicationTable(12))