const fs = require("fs");

const data = fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("After the data");