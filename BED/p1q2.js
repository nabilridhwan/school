/*
    P2007421
    Nabil Ridhwanshah
    DIT/FT/1B/05
*/

function maxNumbers(arr){
    let biggestNum = null;

    arr.forEach(num => {
        if(num > biggestNum){
            biggestNum = num;
        }
    })

    return biggestNum;
}

const numbers = [5,1,3,5,10,2,41,4];
console.log(maxNumbers(numbers))