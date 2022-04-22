const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputs = [];

rl.on("line", (line) => {
    inputs.push(line)


    if (line === "0 0") {
        rl.close();
    }

}).on("close", () => {

    // Last input will be 0 0
    inputs.pop()
    
    inputs.forEach(line => {

        let [num1_extracted, num2_extracted] = line.split(" ");

        const num1 = parseInt(num1_extracted);
        const num2 = parseInt(num2_extracted);

        const absoluteSum = Math.abs(num1 + num2);

        if (absoluteSum === 13) {
            console.log("Never speak again.")
        } else {
            if (num1 === num2) {
                console.log("Undecided.")
            } else if (num1 > num2) {
                console.log("To the convention.")
            } else {
                console.log("Left beehind.")
            }
        }
    })
})