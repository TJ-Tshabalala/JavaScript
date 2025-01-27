// let firstName = "Maria"; // Declare a variable called firstName and initialize it with the string value of Maria
// firstName = "Jacky";    // Update variable firstName with a new string value called Jacky.
/* There are 3 variable-defining keywords:
1. let (local) ; 2. var (global) & 3. const (immutable)
the definition consists of the keyword, a name and a value

let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;

*/
let objectIsDeleted = false;
const prompt = require ("prompt-sync")({sigint: true});
const userInput = prompt("Has the object been deleted? (yes/no): ").toLowerCase();

if(userInput === "yes"){
    objectIsDeleted = true;
    console.log(`Object deleted: ${objectIsDeleted}`);
}
else if(userInput === "no"){
    console.log(`Object deleted: ${objectIsDeleted}`);
}
else{
    console.log("Invalid Input.");
}
