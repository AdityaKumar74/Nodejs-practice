// let objAdi = {
//     name: 'Aditya',
//     age: 21,
//     mobno: 7739296494
// }
// console.log(objAdi);

let capAmerica = {
    name: 'Steve',
    age: 999,
    friends: ['Natasha', 'Thor','Bucky', 'Bruse'],
    address: {
        country: 'USA',
        city: 'LA'
    },
    sayHi: function() {
        console.log('Cap says Hii');
    },
    isAvenger: true   
}
console.log(capAmerica);

// name of capAmerica
console.log(capAmerica.name);

// age of capAmerica
console.log(capAmerica.age);

// friends of capAmerica
console.log(capAmerica.friends);

// address of capAmerica

console.log(capAmerica.address);
console.log(capAmerica.address.city);
console.log(capAmerica.address.country);

// call function sayhii 

capAmerica.sayHi();

console.log('obj before key addition',capAmerica);

// how to add key to object

capAmerica.Movies = ['Avenger', 'Avenger EndGame', 'caption America'];

console.log('obj after key is added',capAmerica);

// how to delete a key from obj

delete capAmerica.Movies;
// 
capAmerica.isAvenger = false;
capAmerica.address.city = 'Queens';
console.log(capAmerica);

// second method to acess a key

console.log(capAmerica.name); // whatever written after DOT automatically converted into string but in sencond mrthod we have to specify it is string or int etc.
console.log(capAmerica['name']); // both are same but written in diffrent ways IT CAN BE ASKED IN INTERVIEW
console.log(capAmerica['address']['city']); // this is how we can acess nested keys.