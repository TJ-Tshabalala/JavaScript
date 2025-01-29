// Chapter 4 project
// Evaluating a number game
const prompt = require("prompt-sync")(); // Allow for the prompt function to be used
console.log("Let's play a game.\nGuess the number that I am thinking of between 1 and 10?");


// The function also allows us to exclude 0 and start the count from 1 and end at 10
let sysNumber = Math.floor(Math.random()* (10 -1 + 1))+1; //Define a var 'sysNumber' with a random value 

let usrNumber = Number(prompt("Enter a number: ")); // Prompt user  to provide a number, with  a  data type of number.

let response = undefined //Define var 'response' with an undefined value to hold our response that we will output

if(usrNumber > sysNumber && !usrNumber >10){ // This allows us to ensure that the user number is not greater than the system limit of 10.
    response = `Your guess of ${usrNumber} is greater than the number I had in mind :)`;
} else if(usrNumber < sysNumber && usrNumber != 0){ // This allows us to exclude 0 
    response = `Your guess of ${usrNumber} is less than the number I had in mind :)`;
} else if(usrNumber === sysNumber){
    response = `You guessed right!\nYour guess: ${usrNumber}, my number: ${sysNumber}`;
}else{
    response = "Invalid response!"
};

console.log(response);


