let arr = ['Aditya is learning dev',22,'c',true]

arr[3] = false
console.log(arr[3]);


// STRING

let str = 'How are you?'
console.log(str);

// lenght of string

console.log(str.length);

// slice method -> extract part of string

let slicedArray = str.slice(2,5);
console.log(slicedArray);

// replace method -> repalce a part with giver word

let repalcedArray = str.replace('How','Where');
console.log(repalcedArray);

// Upper case

let upperCase = str.toUpperCase();
console.log(upperCase);

// lower case
let lowerCase = str.toLowerCase();
console.log(lowerCase);

// concate

let firstName = 'Aditya';
let lastName = 'Kumar';
console.log(firstName + lastName);

// Split

let splitted = str.split(" ");
console.log(splitted);