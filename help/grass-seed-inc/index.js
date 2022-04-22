const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.on('line', function (line, lineCount, byteCount) {
    inputs.push(line)
    if (line === "exit") {
        rl.close();
    }
}).on('close', () => {
    const [costPerSquareMetre, numberOfLawns] = inputs;
    const dimensions = inputs.splice(2, numberOfLawns);
    let totalArea = 0;
    dimensions.forEach(w => {
        const [lawnWidth, lawnHeight] = w.split(" ");
        totalArea += parseFloat(lawnWidth) * parseFloat(lawnHeight)
    })
    console.log(totalArea * costPerSquareMetre)
})