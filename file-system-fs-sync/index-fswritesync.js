const fs = require("fs");

// Creating a new file
// fs.writeFileSync("read.txt", "Welcome to my code");

// fs.writeFileSync("read.txt", "Welcome to cedcoss, & meeting in old building");

// To append data on existing file. 
// fs.appendFileSync("read.txt", " How are you , Have Some tea ?");

// const buf_data = fs.readFileSync("read.txt");

// console.log(buf_data);

// const buf_data = fs.readFileSync("read.txt");

// org_data = buf_data.toString();

// console.log(org_data);

// rename the file.

fs.renameSync("read.txt", "readwrite.txt");