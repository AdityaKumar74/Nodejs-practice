let fs = require("fs");
// console.log(fileSystem);

let path = require("path");

let filePath = path.join(__dirname,"demo");
console.log(filePath);

// cREATE A DIRECTORY

if (!fs.existsSync("humariDirectory")) {
    fs.mkdirSync("humariDirectory");
}

// READ A DIRECTORY

let folderPath = __dirname;//"D:/FJP-6DEV/module1";

let contentOfFolder = fs.readdirSync(folderPath);
console.log(contentOfFolder);

// DELETE A DIRECTORY

fs.rmdirSync("humariDirectory")

// COPY A FILE FROM DIFFRENT DIRECTORY

let sourcePath = path.join(__dirname,"file.txt")

let destinationPath = path.join(__dirname,"module3","file.txt")

// console.log(sourcePath);
// console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);