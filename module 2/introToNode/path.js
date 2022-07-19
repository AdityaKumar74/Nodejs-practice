//"D:\FJP-6 DEV\module 2\javascript\introToNode\path.js"

let path = require("path");
// console.log(path);

let extensionName = path.extname("D:\FJP-6 DEV\module 2\introToNode\calculator.js");
console.log(extensionName);

let baseName = path.basename(__filename);
console.log(baseName);

//console.log(__dirname);
console.log(__filename); // absolute path of file.

let dirPath = __dirname; // absolute path of directory in which our file lies.
console.log(dirPath);

// Path join method

let pathJoinMethod = path.join(dirPath, "testing.js");
console.log(pathJoinMethod);