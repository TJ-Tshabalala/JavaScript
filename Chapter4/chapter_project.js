// Chapter 4 project
// Evaluating a number game
const prompt = require("prompt-sync")(); // Allow for the prompt function to be used
// console.log("Let's play a game.\nGuess the number that I am thinking of between 1 and 10?");


// // The function also allows us to exclude 0 and start the count from 1 and end at 10
// let sysNumber = Math.floor(Math.random()* (10 -1 + 1))+1; //Define a var 'sysNumber' with a random value 

// let usrNumber = Number(prompt("Enter a number: ")); // Prompt user  to provide a number, with  a  data type of number.

// let response = undefined //Define var 'response' with an undefined value to hold our response that we will output

// if(usrNumber > sysNumber && !usrNumber >10){ // This allows us to ensure that the user number is not greater than the system limit of 10.
//     response = `Your guess of ${usrNumber} is greater than the number I had in mind :)`;
// } else if(usrNumber < sysNumber && usrNumber != 0){ // This allows us to exclude 0 
//     response = `Your guess of ${usrNumber} is less than the number I had in mind :)`;
// } else if(usrNumber === sysNumber){
//     response = `You guessed right!\nYour guess: ${usrNumber}, my number: ${sysNumber}`;
// }else{
//     response = "Invalid response!"
// };

// console.log(response);

// Friend Checker game

// let usrName = prompt("Enter a name: ");

// switch(usrName){
//     case "John":
//         sysConfirmation = `Friend, ${usrName}`;
//         break;
//     case "Lisa":
//         sysConfirmation = `Friend ${usrName}`;
//         break;
//     case "Bart":
//         sysConfirmation = `Friend ${usrName}, Allen aka the Flash :o`;
//         break;
//     case "Benson":
//         sysConfirmation = `Tell Mordecai & Rigby to get back to work bro ${usrName}`;
//         break;
//     default:
//         sysConfirmation = `Not sure who you are, but its nice to meet you, ${usrName}`;
// };

// console.log(sysConfirmation);


// Rock Paper Scissors game
let sysSelect = ['rock', 'paper', 'scissors']; // define an array with the 3 properties/values needed

let randomSelect = Math.floor(Math.random() * 3); // define var 'randomSelect' to provide random selection of the array value
let systemChoice = sysSelect[randomSelect]; // This should give a random index value between 0-2 and use that index to pull the value from the sysSelect array

let usrSelect = prompt("Select either Rock, Paper or Scissors: ").toLowerCase(); // Prompt user to provide a selection.

let message; // Define var 'message' to hold your logged output.

if(usrSelect === systemChoice){
    message = "Game tied";
}
else{
    switch(usrSelect){
        case "paper":
            if(systemChoice === "rock"){
                message = "You win";
            } else if(systemChoice === "scissors"){
                message = "System wins!"
            }
            break;
        case "rock":
            if(systemChoice === "scissors"){
                message = "You win!";
            } else if(systemChoice === "paper"){
                message = "System wins!";
            }
            break;
        case "paper":
            if(systemChoice === "rock"){
                message = "You win!";
            } else if(systemChoice === "scissors"){
                message = "System wins!";
            }
            break;
        default:
            message ="Don't really know what you were throwing there bud! Try again.";
    };
};
console.log(usrSelect); // logs the output of the user selection
console.log(systemChoice); // logs the output the system's choice
console.log(message); // Logs the output of the message



