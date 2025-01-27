shopping_list = []; // define an empty array
var counter = 0;
//Allow you to use prompt() method without throwing an error
const prompt = require("prompt-sync")();

while(true){
    item =prompt("Add item to list: ");
    shopping_list.push(item);
    if(counter === 2){
        break;
    }
    counter++;
}

let findBread = shopping_list.indexOf("Bread");
shopping_list.splice(findBread,1,"Bananas","Eggs");
shopping_list.pop();
shopping_list.sort();
let milkIndex =  shopping_list.indexOf("Milk");
console.log(milkIndex);
shopping_list.splice(1,0,"Carrots","Lettuce");
console.log(shopping_list);
let sweets = ["Juice" ,"Pop"];
new_list = shopping_list.concat(sweets, sweets);

console.log(new_list);

let indexOfPop = new_list.lastIndexOf("Pop");
console.log(indexOfPop);


