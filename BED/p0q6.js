/*
    P2007421
    Nabil Ridhwanshah
    DIT/FT/1B/05
*/

function twoSum(numbers, sum){
    let index1, index2;


    for(let i = 0; i < numbers.length; i++){

        for(let j = 0; j < numbers.length; j++){

            if(numbers[i] + numbers[j] == sum){
                index1 = i;
                index2 = j;
            }
            
        }
        
    }

    if(index1 && index2){
        return [index1, index2]
    }

    return -1

    
}

console.log(twoSum([2,8,11,13], 19))