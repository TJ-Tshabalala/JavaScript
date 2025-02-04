// Recursive functions

// function getRecursive(nr){
//     console.log(nr);
//     if(nr > 0) {
//         getRecursive(--nr);
//     }
    
// }


// getRecursive(3);

// function logRecursive(nr){
//     console.log("Started function:", nr);
//     if(nr > 0){
//         logRecursive(nr -1);
//     }else{
//         console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
// }

// logRecursive(3);

function factorial(x) {
    // Base case
    if (x == 0) {
        return 1;
    } else {
        // Recursive case
        return x * factorial(x - 1);
    }
}

console.log(factorial(5));