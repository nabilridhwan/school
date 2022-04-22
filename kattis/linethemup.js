const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputs = [];

rl.on("line", (line) => {
    inputs.push(line)

    if (line === "exit") {
        rl.close();
    }

}).on("close", () => {

    // Remove the first element
    inputs.shift();
    const firstLetterArray = inputs.map(line => {
        return line.split("")[0]
    })

    const compareArray = [...firstLetterArray].sort().reverse();

    if (JSON.stringify(firstLetterArray) === JSON.stringify(compareArray)) {
        console.log("DECREASING")
    } else if (JSON.stringify(compareArray.reverse()) === JSON.stringify(firstLetterArray)) {
        console.log("INCREASING")
    } else {
        console.log("NEITHER")
    }
})