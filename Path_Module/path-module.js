const path = require("path");

// console.log(path.dirname("/home/cedcoss/Documents/Node JS/Path_Module/path-module.js"));
// console.log(path.extname("/home/cedcoss/Documents/Node JS/Path_Module/path-module.js"));
// console.log(path.basename("/home/cedcoss/Documents/Node JS/Path_Module/path-module.js"));
// console.log(path.parse("/home/cedcoss/Documents/Node JS/Path_Module/path-module.js"));
const mypath = path.parse("/home/cedcoss/Documents/Node JS/Path_Module/path-module.js");
// console.log(mypath.name);
console.log(mypath.root);