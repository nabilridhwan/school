const fs = require("fs");
const fileDir = "./test2.txt"

// This function will "Hello World to the file"
fs.writeFile(fileDir, "Hello World\n", {
    flag: "a"
}, (err) => {

    if (err) console.log(err)

    // Read file
    let data = fs.readFileSync(fileDir);
    console.log(data.toString());
});