// function addNumbers(num1,num2) {
//     return a+b;
// }
// console.log(addNumbers(2,4));

// IIFE --> Immedietly Invoked function Expression

(function(){
    console.log("hello JS");
})();

// IIFE with parameters

(function(num1,num2){
    console.log(num1/num2);
})(10,5);