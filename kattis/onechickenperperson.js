const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", (line) => {
    let [num1_extracted, num2_extracted] = line.split(" ");

    const num1 = parseInt(num1_extracted);
    const num2 = parseInt(num2_extracted);

    const absoluteDifference = Math.abs(num2 - num1);

    num1 < num2 ? console.log(`Dr. Chaz will have ${absoluteDifference} ${absoluteDifference === 1 ? "piece" : "pieces"} of chicken left over!`) : console.log(`Dr. Chaz needs ${absoluteDifference} more ${absoluteDifference === 1 ? "piece" : "pieces"} of chicken!`)

    rl.close();
})