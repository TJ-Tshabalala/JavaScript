// Parameters and Args

// function tester(para1, para2){
//     return para1 + " " + para2;
// }

// const arg1 = "argument 1";
// const arg2 = "argument 2";

// tester(arg1, arg2);

//Create a basic calculator
const prompt = require("prompt-sync")();
let firstNum = Number(prompt("Number: "));
let varSymbol = prompt("");
varSymbol.trim();
let secondNum = Number(prompt("Number:  "));
function calculator(x, y){
    if(varSymbol === "+"){
        return x + y;
    } else if(varSymbol === "-"){
        return x-y;
    }
}

console.log(calculator(firstNum, secondNum));