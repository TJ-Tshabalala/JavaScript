// Practice exercise 2 for chapter 6
const prompt = require("prompt-sync")();

let descriptiveWordsArray = ['James', 'Bruce','Shotgunn','Glenn','Red Shirt','DunzelDorf'];
let randomName = 0;
function getName(){
    
    const userInput = prompt("Give me a name: ");
    
    descriptiveWordsArray.push(userInput);
    
    randomName = Math.floor(Math.random() * 10);
        console.log(descriptiveWordsArray[randomName]);
};

getName();
console.log(descriptiveWordsArray);




