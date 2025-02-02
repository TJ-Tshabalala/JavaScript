// Practice exercise 1 of chapter 5

const prompt =  require("prompt-sync")();
let ansCorrect = false; // Boolean var, to see whether the answer is correct or not.
let varMax = undefined;
let randomVar = Math.floor(Math.random()  * 5 ) + 1;
varMax = randomVar;

let usrGuess; 
while(!ansCorrect){
   
    usrGuess = Number(prompt("Guess a number between 1 and 5: "));
    let result;

    if(varMax === usrGuess){ //This only prints if varMax is the same as the usrGuess variable
        ansCorrect = true;
        result =`Correct guess! ${varMax}`;
        
    }else{
         result = `Incorrect guess\nCorrect answer: ${varMax}`; //  This should print as long as the while loop is true
         varMax = Math.floor(Math.random()* 5) +1;

    };
    console.log(result);
};    