// node is a run time environment because of that we are abel to run javaScript code stand alone before that JS only runs in browser.

let cp = require('child_process');
// console.log(cp);

// open calculator with the help of this file

// for windows replace gnome-calculator with calc

//cp.execFileSync = cp.execFileSync("calc");

let content = cp.execSync("node test.js");

console.log("" + content);

/*
What is child process?
ANS:- It help us to run multiple task. (basically it works asyncronously)

What is execSync?
ANS:- It creates a new terminal and run the code and return its output.
*/