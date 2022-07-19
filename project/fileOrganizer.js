let fs = require("fs");
let path = require("path");
let folderPath = process.argv[2];

// console.log(folderPath);

let folderExists = fs.existsSync(folderPath);

let extension = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".png",".gif"],
    Software:[".exe"]
}

// function giveFolderName = {
//     for(let key in extension) {
//         let
//     }
// }

if(folderExists) {
    //we will code
    // cosole.log("path is valid!!!");
    let files = fs.readdirSync(folderPath);
    for (let i = 0; i <files.length; i++) {
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        console.log(ext);
    }
    
}
else {
    console.log("Please Enter valid path!!");
}