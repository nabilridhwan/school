const readline = require('readline');

// If you don't know about rl, dont worry, this line below just makes sure it inputs from your console and outputs to your console too. Don't worry much about this.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Inputs hold all our input stuff, every line goes here. (See in the r.on() callback function)
let inputs = [];

rl.on('line', function (line, lineCount, byteCount) {


    // Push to input

    inputs.push(line)

    // From this:
    /*
        2
        3
        2 3
        4 5
        5 6
        */

    // After pushing, inputs will look like this:
    // ['2', '3', '2 3', '4 5', '5 6']

    // Ignore this (type 'exit' in console to close the program)
    if (line === "exit") {
        rl.close();
    }

}).on('close', () => {


    // Index 0 and 1 is cost per square meter and the number of lawns
    // ['2', '3', '2 3', '4 5', '5 6']
    //   ^0   ^1
    // 0 is cost per square meter
    // 1 is the number of lawns
    const [costPerSquareMetre, numberOfLawns] = inputs;

    // Get the number of lawns AFTER index 2
    // Why? Because index 0 and 1 is cost per square meter and 1 is the number of lawns so we need to 'get rid' of those.

    // From this:
    // ['2', '3', '2 3', '4 5', '5 6']

    // To this:
    // ['2 3', '4 5', '5 6']
    // There is 3 because it comes from the number of lawns.
    const width = inputs.splice(2, numberOfLawns);

    // New width is the calculated widths
    const newWidths = [];

    // For each of the widths:
    // ['2 3', '4 5', '5 6']

    // 1. Split by space
    // 2. Times each of the width and height to get the area
    // 3. Push it to newWidths
    width.forEach(w => {
        // The line below completes step 1
        const [lawnWidth, lawnHeight] = w.split(" ");

        // The line below completes step 2 (times) and step 3 (push)
        // Parse each of them as float (because qn says have decimal)
        newWidths.push(parseFloat(lawnWidth) * parseFloat(lawnHeight));
    })

    // Total cost starts from 0
    let totalCost = 0;

    // For each new widths, times it by the cost per square meter
    newWidths.forEach(w => {
        totalCost += (w * costPerSquareMetre);
    })

    // Answer:
    console.log(totalCost)
})