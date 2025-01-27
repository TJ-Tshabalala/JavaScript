//This part is to show the important role indentation and new lines play in writing code.
// I ran into errors when trying not to indent and having everything in an unreadable manner.
// It made it hard to read the code and to spot where the error/bug was

// The following code below is one that has been properly indented and has new lines:

let status = "new";
let scared = true;
if(status === "new") {
    console.log("Welcome to JavaScript!");
    if(scared) {
        console.log("Don't worry you will be fine!");
    } else{
        console.log("You're brave! You are going to do great!");
    }
} 
else{
    console.log("Welcome back, I knew you'd like it!");
}