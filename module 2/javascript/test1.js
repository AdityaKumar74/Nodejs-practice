
// let a = 2; { 
//     let a = 3; { 
//         let a = 4; { 
//             let a = 5; 
//             console.log(a); 
//         } 
//         console.log(a); 
//     } 
//     console.log(a); 
// } 
// console.log(a);

// let arr = [1, 2, 3]; (
//     function () { for (x in arr) arr.unshift(arr.pop()); console.log(arr); 
//     })();

// let randomAdder = function (arr = ["a", "b"]) { 
//     arr[arr.length * arr.length] = arr.length * arr.length; 
// };

// randomAdder(arr); 
// randomAdder();

// console.log(arr[9]); 
// console.log(arr[8]);

// function f() { 
//     console.log(arguments); 
// }

// function f(a, b) { 
//     return a + b; 
// }

// console.log(f(2, 3, 4, 5));

// function f(x, y, z, t) { 
//     return x + y + z + t; 
// }

// console.log(f(2, 3, 4, 5));

// console.log(a); 
// f(2, 3, 4, 5);

// var a = 1; 
// var a = 2; 
// console.log(a); 
// console.log(b); 
// let b = 2;

// function f() { 
//     console.log(arguments); 
// }

// let obj = {"concept":""};

// console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );

// let a;

// console.log(a);

// function A() { let a = 2; console.log(a);

// function C() { console.log(a);

// function D() {
//   console.log(a);

//   a = 2;
// }
// D();
// a = 3;
// } C(); }

// function B() { let a; console.log(a);

// function E() { a = 6; console.log(a);

// }

// a = 2; E(); console.log(a); }

// function F() { console.log(a); a = 2; }

// a = 3;

// F(); B(); A();

let users = [{
    name: "Rajneesh",
    age: 34,
    address: {
        local: "22 Alaknanda",
        city: "Dehradun",
        state: "UK",
    },
    orders: [{
        id: 1,
        name: "GOT Book Series"
    }],
}, {
    name: "Bhavesh",
    age: 37,
    address: {
        local: "48 DT Row",
        city: "Hyderabad",
        state: "AP",
    },
}, {
    name: "Jasbir",
    age: 38,
    address: {
        local: "196 Lama Bhavan",
        city: "Gangtok",
        state: "Sikkim",
    },
    orders: [{
        id: 1,
        name: "Chair"
    }, {
        id: 2,
        name: "PS5"
    }, ],
}, ];

function updateUsers(users, userObject, item) //{ //write your code here }

    console.log(JSON.stringify(updateUsers(users, {
        name: "Rajneesh",
        age: 34,
        address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
        },
    }, "GOT Book Series")));

    console.log(JSON.stringify(updateUsers(users, {
        name: "Ravi",
        age: 24,
        address: {
            local: "25 Iroda",
            city: "Dehradun",
            state: "UK",
        },
    })));

    console.log(JSON.stringify(updateUsers(users, {
        name: "Ravi",
        age: 24,
        address: {
            local: "25 Iroda",
            city: "Dehradun",
            state: "UK",
        },
    }, "Chair")));

    console.log(JSON.stringify(updateUsers(users, {
        name: "Rajneesh",
        age: 34,
        address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
        },
    }, "Fan")));

    JSON.stringify(updateUsers(users, {
        name: "Rajneesh",
        age: 34,
        address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
        },
    }, "GOT Book Series"));

console.log(JSON.stringify(updateUsers(users, {
    name: "Ravi",
    age: 24,
    address: {
        local: "25 Iroda",
        city: "Dehradun",
        state: "UK",
    },
})));

console.log(JSON.stringify(updateUsers(users, {
    name: "Ravi",
    age: 24,
    address: {
        local: "25 Iroda",
        city: "Dehradun",
        state: "UK",
    },
}, "Chair")));

console.log(JSON.stringify(updateUsers(users, {
    name: "Rajneesh",
    age: 34,
    address: {
        local: "22 Alaknanda",
        city: "Dehradun",
        state: "UK",
    },
}, "Fan")));