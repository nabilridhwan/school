/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/

function allMultiple(num1, num2, x){

    let str = "";
    if(num1 <= num2){
        for(let i = num1; i <= num2; i++){
            if(i % x == 0){
                str += i + " "
            }
        }
    }

    console.log(str)

}

allMultiple(10,35,5)