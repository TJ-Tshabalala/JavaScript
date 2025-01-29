let age = 10; // define var 'age' with initial value of 10
let cost = 0; // define var 'cost' with initial value of 0

let message; //define a null var 'message' that will hold our output based on our if-else statement

if(age < 3){
    cost = 0;
    message = "Access is free under three.";
} else if(age < 12){
    cost = 5;
    message = "With the child discount, the fee is $5.";
} else if(age < 65){
    cost = 10;
    message = "A regular ticket costs $10.";
}
else if (age > 65){
    cost = 7;
    message = "Ticket is $7.";
}

console.log(message);
console.log(`Your total cost $${cost}`);