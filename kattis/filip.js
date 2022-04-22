const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", (line) => {

    let [num1_extracted, num2_extracted] = line.split(" ");
    const newNum1 = num1_extracted.split("").reverse().join("");
    const newNum2 = num2_extracted.split("").reverse().join("");

    if (newNum1 > newNum2) {
        console.log(newNum1)
    } else {
        console.log(newNum2)
    }

    rl.close();
})