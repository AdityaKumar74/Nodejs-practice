function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mul(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

// Now we want to access these function outside this file then.

module.exports = {
    addition: add,
    subtraction: sub,
    mutiplication: mul,
    division: div
}

