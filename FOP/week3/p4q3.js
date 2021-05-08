/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/

let number = 27;

if(number % 5 == 0 && number % 6 == 0){
    console.log(number + " is divisible by both 5 and 6.")
}else if(number % 5 == 0 || number % 6  == 0){
    console.log(number + " is divisible by 5 or 6, but not both.")
}else{
    console.log(number + " is not divisible by either 5 or 6.")
}