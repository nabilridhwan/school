const fs = require("fs");

// This function will "Hello World to the file"
fs.writeFile("./test2.txt", "Hello World\n", (err) => {

    if (err) console.log(err)

    // Read file
    fs.readFile("./test2.txt", 'utf8', (err,data) => {
        console.log(data);
    });
});