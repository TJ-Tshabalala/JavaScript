// Learn more about switch statements
// Used to evaluate other conditions other than Boolean
// Best to use when evaluating more than four or five values.

// if(activity === "Get up!"){
//     console.log("It is 6:30AM");
// } else if(activity === "Breakfast"){
//     console.log("It is 7:00AM");
// } else if(activity === "Drive to work"){
//     console.log("It is 8:00AM");
// } else if(activity === "Lunch"){
//     console.log("It is 12:00PM");
// }else if(activity === "Drive home"){
//     console.log("It is 5:00PM");
// }else if(activity === "Dinner"){
//     console.log("It is 6:30PM");
// }
// The above is to show the inefficiency of the if else block statement.


/*
switch(expression){
    case value1:
        // code to be executed
        break;
    case value2:
        // code to be executed
        break;
    case value-n:
        // code to be executed
        break;
}
        */


const prompt = require("prompt-sync")();

let activity = prompt("What activity are you doing: ");

switch(activity){
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home.":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:
        console.log("Yabba dabba doo!");
}