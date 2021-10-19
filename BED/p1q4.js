/*
    P2007421
    Nabil Ridhwanshah
    DIT/FT/1B/05
*/

function calculateMean(numbers){
    let n = 0;
    numbers.forEach(num => n+=num)

    // Or alternatively,
    // for(let i = 0; i < numbers.length; i++){
    //     n += numbers[i]
    // }

    return n/numbers.length
}

const numbers = [1,2,3,4,5];
console.log(calculateMean(numbers))