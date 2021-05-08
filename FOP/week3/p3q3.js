let num = 932;
let [digit1, digit2, digit3] = num.toString().split("").map(num => Number(num))
console.log(`num:\t${num}\ndigit1:\t${digit1}\ndigit2:\t${digit2}\ndigit3:\t${digit3}\nsum:\t${digit1 + digit2 + digit3}`)