// let varContainingFunction = function() {
//     let varInFunction = "I'm  in a function";
//     console.log("hi, there!", varInFunction);
// };

// varContainingFunction();
/*
 Naming Functions:
 1. Use camelCase
 2. Make it descriptive (what is the function doing or what its meant to do)
 3.Use a verb(action word) to describe what the function is doing  
 */
//Practice exercise 6.1

function addNumber(x, y){
    
    
    let result = userOne + userTwo;
    console.log(result);
}

const prompt = require("prompt-sync")();
let userOne = Number(prompt("Give me the first parameter: "));
let userTwo = Number(prompt("Give me the second paramter: "));

addNumber(userOne,userTwo);
