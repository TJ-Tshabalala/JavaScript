let myVariable = false; // Create variable with Boolean value
console.log(myVariable); // Output the Boolean value to the console
myVariable = true; // Change var to the opposite to see how the result changes

if(myVariable == true){ // Checks to see if myVaribale is true
    console.log("Variable is true."); // Logs output in the if block, if myVariable is true
}
else{
    console.log("Variable is", myVariable); // if myVariable does not evaluate to true, logs output in else block
}


// Check whether a acondition is not true using the !

if(myVariable != true){
    console.log("This shows that the variable is not true, but false");
}
else{
    console.log("This shows that the variable is true.");
}
