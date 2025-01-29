// This is the chapter 4 project which will combining everything I learnt so far.

const prompt = require("prompt-sync")(); // This allows me to use the prompt method

let prize = prompt("Select a value between 1 and 10: "); // Prompt the user to select a number between 1 and 10.

prize = Number(prize); // This should convert the user's prompt to the number data type.

let message;

switch(prize){
    case 1:
    case 2:
    case 3:
        message = "Congratulations, you've won yourself R500 of airtime, please visit the ticket office to redeem your prize.";
        break;
    case 4:
    case 5:
    case 6:
        message = "Congratulations, you've won yourself, R10,000, please visit the ticket office to redeem your prize.";
        break;
    case 7:
    case 8:
    case 9:
        message = "Congratulations, you've won yourself a 3 month voucher at our world renowned local restaurant, please visit the ticket office to redeem your prize."
        break;
    case 10:
        message = "Congratulations, you've won a brand new Suzuki Espresso, please visit the ticket office to redeem your prize.";
        break;
    default:
        message = "Invalid ticket";
};

console.log(`My Selection: ${prize}\n`,message);