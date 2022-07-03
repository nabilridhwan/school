// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

function snail(array) {
    // Check if 2d arr is empty (i.e. [[]], it should return [])
    if (array[0].length == 0) {
        return [];
    }

    const squareMatrixLength = array.length;
    let currentRow = 0;
    let currentIndex = 0;
    let directionIndex = 0;
    const directions = ["RIGHT", "DOWN", "LEFT", "UP"];

    let rtnArr = [];

    // Generate the number of times array (refer to the picture in the repo)
    const numberOfTimesArray = generateNumberOfTimesArray(squareMatrixLength);

    numberOfTimesArray.forEach((number) => {
        // Check if the directions array if above the max length, if it is, make it 0
        if (directionIndex > directions.length - 1) {
            directionIndex = 0;
        }

        // Let d become the direction (e.g. "RIGHT")
        let d = directions[directionIndex];

        // For each times of the number, (means if number = 4, it'll run 4 times)
        for (let i = 0; i < number; i++) {
            // Change the index/row based on the direction
            if (d === "RIGHT") {
                currentIndex++;
            } else if (d === "LEFT") {
                currentIndex--;
            } else if (d === "UP") {
                currentRow--;
            } else {
                currentRow++;
            }

            // Push the element into the return array
            rtnArr.push(array[currentRow][currentIndex - 1]);
        }

        // Remember to increase the direction's index
        directionIndex++;
    });

    // Return the return array
    return rtnArr;
}

// This function generates the number of times
function generateNumberOfTimesArray(squareMatrixLength) {
    const firstItem = squareMatrixLength;
    let arr = [firstItem];

    let mem = squareMatrixLength - 1;

    for (let i = mem; mem > 0; mem--) {
        arr.push(mem);
        arr.push(mem);
    }

    return arr;
}

let b = snail([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]);

console.log(b);

// Expected => [1,2,3,6,9,8,7,4,5]
