// Arrow functions
// let doingArrowStuff = x => console.log(x);

// doingArrowStuff("Great!")

// let sayHi = () => console.log("hi");

// sayHi();


// const arr = ['squirrel','alpaca','budddy'];
// arr.forEach(e => console.log(e));

// // Spread operator
// //Special operator, consists of 3 dots used before a reference expression or string, and it spreads out the args or elements of an array.

// let spread = ['so','much','fun'];
// let message = ['JavaScript','is',...spread,'and','very','powerful'];
// console.log(message);

// //Spread Operator can also be used to send multiple arguments to a function... Example:

 function addTwoNumbers(x,y){
     console.log(x + y);
 }

// let arrayOne = [5, 9];
 //addTwoNumbers(...arrayOne);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arrayTwo = [6,7];

// // Use the spread function to call both arrays that have multiple indexes, which you use as arguments.
// addFourNumbers(...arrayOne,...arrayTwo);

// Rest Parameter

// function someFunction(param1, ...param2){
//     console.log(param1, param2);

// }
// someFunction("hi", "there!", "How are you?");


// Returning function values
// Return value, gives back a result when we specify value. It can be stored in a variable.

const prompt = require("prompt-sync")();
let favouriteSubject = prompt("What is your favourite subject? ");
let result = addTwoNumbers(4,5);
console.assert.toString(result);