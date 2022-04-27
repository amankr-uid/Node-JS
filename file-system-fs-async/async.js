const fs = require("fs");

fs.mkdir("Aman", (err) => {
    console.log("folder created");
})
fs.writeFile("./Aman/bio.txt", "My name is Aman Kumar", (err) => {
    console.log("files created");
});
fs.appendFile("./Aman/bio.txt", " Meet me on cedcoss gate", (err) => {
    console.log("file appended");
});
fs.readFile("./Aman/bios.txt", "utf-8", (err, data) => {
    console.log(err);
})
fs.rename("./Aman/bio.txt", "./Aman/mybio.txt", (err, data) => {
    console.log("File Rename Finished");
});
fs.unlink("./Aman/mybio.txt", (err) => {
    console.log("file deleted");
});
fs.rmdir("./Aman", (err) => {
    console.log("Folder Deleted");
});