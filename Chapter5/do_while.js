// Understanding the do_while loop
/* syntax:
    do {
    // Execute this code if the condition is true
    }
    while(condition);
    */
   const prompt = require("prompt-sync")();
   let number;
   do{
    number =  prompt("Please enter a nuumber between 0 and 100: ");
   }
   while(!(number >= 0 && number < 100));