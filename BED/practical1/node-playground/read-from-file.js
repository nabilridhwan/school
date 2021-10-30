const fs = require('fs');
const fileDir = "test.txt"

let data = fs.readFileSync(fileDir, "utf8")

console.log(data)