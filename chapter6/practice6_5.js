// // Understanding Immediately Invoked function expression
// // IIFE is a way of expressing a function so that it gets invoked immediately
// // It is anonymous, it does not have a name and it is self-executing
// // Useful to create public and private variables and functions
// //Example

// (function(){
//     console.log("IIFE!");
// })();
// // function is surrounded by parenthesis, which makes it create a function instance
// // Without those parenthesis it would throw an error
// // Since the function does not have a name
// // Can be worked around by assigning the function to a variable, where the output can be returned to the variable.
// // (); => executes the unnamed function - this must be immediately done following the function's declaration.

// // IIFE can be combined with other function parameters, such as Arrow Functions
// //Example:

// (() =>{
//     console.log("run right away");
// })();

// Chapter 6 exercise 5

// (function(){ // 
//     let oneK = "1000"; // define string var 'oneK' initialize with a value of 1000;

// })(); //invoke function

// (function(x = 23){
//      x = 25;
//      console.log(x);
    
// })();

// let newResult = (function(){
//        let newResult = console.log("YaddaIMean!");
//         return newResult;
// })();

// console.log(newResult);

// Anonymous Function

let resultGrid = (x = "") =>{
    user = prompt("Enter a value ");
    x = user;
};

console.log(resultGrid);

