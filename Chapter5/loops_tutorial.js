// Learning about loops.
// Loops are a contrl flow concept
// that allows us to repeat a block of code
// multiple times. There are different types of loops
// in javascript. The most common ones are the for loop
// foreach method
// different types of loops:
// 1. while loop; 2. do while loop; 3. for loop; for in; for of loop

// let i =0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza","Jacky"];
// let notFound = true;

// while(notFound && someArray.length){
//     if(someArray[0] === "Louiza"){
//         console.log("Found her!");
//         notFound = false;
//     } else{
//         someArray.shift();
//     }
// }

let nr1 =0;
let nr2 =1;
let temp;

fibonnaciArray = [];

while(fibonnaciArray.length < 25){
    fibonnaciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}
console.log(fibonnaciArray);