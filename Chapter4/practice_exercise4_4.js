
let randomNumber = Math.random(); // define var 'randomNumber' assign it a random number between 0 and 1.

//Multiply by 10 to obtain
randomNumber = randomNumber * 10;

// remove digits past decimal place to provide a whole number

RandomNumber = Math.floor(randomNumber);

let randomValue = Math.floor(Math.random() * 6);; // var that gets a random Value assigned to it

const prompt = require("prompt-sync")();

let userNumber = Number(prompt("Guess a number from 1-6: ")); // Prompt user to guess a number
let response; // define var 'response' that will store the message that will be logged to console.

// Define a switch case that takes the userNumber and consoles, the relevant response
switch(userNumber){
    case 1:
        if(randomValue ===  userNumber){
            response =`You guessed:${userNumber}\nCorrect number: ${randomValue}`;
        }else{
            response = (`${userNumber}, incorrect\nCorrect answer: ${randomValue}`);
        };
        break;
    case 2:
        if(randomValue ===  userNumber){
            response =`You guessed:${userNumber}\nCorrect number: ${randomValue}`;
        }else{
            response = (`${userNumber}, incorrect\nCorrect answer: ${randomValue}`);
        };
        break;
    case 3:
        if(randomValue ===  userNumber){
            response =`You guessed:${userNumber}\nCorrect number: ${randomValue}`;
        }
        else{
            response = (`${userNumber}, incorrect\nCorrect answer: ${randomValue}`);
        };
        break;
    case 4:
        if(randomValue ===  userNumber){
            response =`You guessed:${userNumber}\nCorrect number: ${randomValue}`;
        }
        else{
            response = (`${userNumber}, incorrect\nCorrect answer: ${randomValue}`);
        };
        break;
    case 5:
        if(randomValue ===  userNumber){
            response =`You guessed:${userNumber}\nCorrect number: ${randomValue}`;
        }
        else{
            response = (`${userNumber}, incorrect\nCorrect answer: ${randomValue}`);
        };
        break;
    case 6:
        if(randomValue ===  userNumber){
            response =`You guessed:${userNumber}\nCorrect number: ${randomValue}`;
        }
        else{
            response = (`${userNumber}, incorrect\nCorrect answer: ${randomValue}`);
        };
        break;
    default:
        response = "Number is not within specifications. Select a number between 1-6"
};

console.log(response); // Log the users response, along with the random number.