let fs = require("fs");
// basically fs(file system) is a object we get to know it when we console log it.
//console.log(fs);

let path = require("path");

//  CRUD- CREATE READ UPDATE DELETE

let filePath = path.join(__dirname,"file.txt");
//console.log(filePath);

// C- Create

// writeFileSync:- if file donot exist then it will create a file and write text inside it otherwise it will override.
fs.writeFileSync(filePath,"Hello I am a text file");

// R - Read
console.log("Before update :");
let content = fs.readFileSync(filePath,'utf-8'); // Mentioning utf-8 is nesessary because it converts the text to readable form otherwise it will show ascii numbers.
console.log(content);

// U - Update
fs.appendFileSync(filePath,"\nNewly added content");
console.log("After update :");
console.log(fs.readFileSync(filePath,'utf-8'));

// D - Delete

fs.unlinkSync(filePath);