/*
    P2007421
    Nabil Ridhwanshah
    DIT/FT/1B/05
*/

function bigBus(n){
    if(n < 1){
        console.log("Enter a number more or equal to 1")
    }else{

        let arr = [];

        for(let i = 1; i < n+1; i++){

            if(i % 15 == 0){
                arr.push("BigBus")
            }else if(i % 5 == 0){
                arr.push("Bus")
            }else if(i % 3 == 0){
                arr.push("Big")
            }else{
                arr.push(i)
            }

        }
        
        return arr;
    }
}

console.log(bigBus(15))