/* Create a variable for your name, another one for your age, another for
whether you can code JavaScript or not. */


let name = null;
let lastName = null;
let age = null;
let canYouCode = null;

const prompt = require("prompt-sync")();
name = prompt("What is your name: ");
lastName = prompt("What is your last name: ");
age = prompt("How old are you? ");
canYouCode = prompt("Do you think you can code? (yes/no):  ").toLowerCase();

if(canYouCode === "yes"){
    console.log(`Hello, my name is ${name}, I am ${age} years old and I can can code Javascript: \ntrue.`);

}

else if(canYouCode === "no"){
    console.log(`Hello, ${name}, keep pushing, you will learn how to code, in no time.\n Just continue to learn & practice and have discipline.`);
}


