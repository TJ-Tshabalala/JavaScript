const prompt = require("prompt-sync")();

let age = Number(prompt("How old are you? "));

let message;

if(age >=21){
    message =`Welcome! Confirming your entry to the venue and you can now purchase alcohol`;
}
else if(age >= 19){
    message = "Welcome! Confirming your entry to the venue, though alcohol purchase is prohibited!";
}
else{
    message ="Enty denied!";
}

console.log(`Age: ${age}\n${message}`);
