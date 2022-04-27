const fs = require("fs");

// fs.writeFile("read.txt", "welcome to ui world", (err) => {
//     console.log("file is created");
//     console.log(err);
// });
// fs.appendFile("read.txt", " & please connect me on cedcommerce", (err) => {
//     console.log("task completed");
// });
// fs.readFile("read.txt", (err, data) => {
//     console.log(data);
// });
fs.readFile("read.txt", "UTF-8", (err, data) => {
    console.log(data);
});