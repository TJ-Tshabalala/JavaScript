// Looping over objects by converting to an array

// Convert the keys of the object to an array
// Convert the values of the object to an array
// Convert the key-value entries to an array (containing arrays with two elements: object key and object value)

// Example:

// Define our object


// Use built-in function Object.keys(objectName); to loop over the object keys

//let arrKeys = Object.keys(car); // Creats an array with the object keys (properties of the object)
//console.log(arrKeys);

// for(let key of Object.keys(car)){
//     console.log(key) //using a for of loop to loop over the object properties.
// }
// We can use the for of loop, to loop over the objects values, by using another
// built-in function called Object.values(objectName)

//Example:

// for(let key of Object.values(car)){
//     console.log(key);
// }

// Can loop over these arrays in the same way you loop over any array, by using length function and index strategy.
// Example:

// let arrKeys = Object.keys(car);
// for(let i =0; i < arrKeys.length; i++){
//     console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// }


// Another function of the Objects method is the entries(objectName)

//An interesting way to loop over both arrays at the same time using the for of loop.
//Example:

// let arrOfEntries = Object.entries(car); // This allows us to pull key-value pair and place each property with its corresponding value into a separate(array) within the arrOfEntries array
// console.log(arrOfEntries);

// console.log(arrOfEntries[1][1]); // Log the value at the index, result should be VolksWagen.




// break and continue

// break and continue are keywords that are used to control the flow of execution of the loop
//break will stop the loop and move on to the code below the loop
// continue will stop the current iteration and move back to the top of the loop, checking the condition( or in the case of a for loop, performing the statement and then checking the condition)

//Example:

let car =[{
    model: "Golf",
    make: "VolksWagen",
    year: 1999,
    color: "black",
},
{
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
},
{
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",

},
{
    make: "Fiat",
    model: "Punto",
    year: 2020,
    color: "black",
}

];

// Have a solid look at the break statement


// for (let i  = 0; i < 10 ; i++){
//     console.log(i);
//     if(i === 4){
//         break;
//     }
// } // this causes the loop to break when it reaches the fourth iteration.



// Can use the break statement to stoop looping through the array of cars when we have found a car that matches our demands.
// Example:

// for(let i = 0; i < car.length; i++){
//     if(car[i].year >= 2020){
//         if(car[i].color === "black"){
//             console.log("I have found my new car:", car[i]);
//             break;
//         }
//     }
// }


// Continue Statement
// break can be used to quit the loop, and continue can be used to move on to the next iteration of the loop.
// It quits the current iteration and moves back up to check the condition and start a new iteration

//Example:

// for(let vehicle of car){
//     if(vehicle.color !== "black"){
//         continue;
//     }
//     if(vehicle.year >= 2020){
//         console.log("we could get this one", vehicle);
//     }
// }

// Careful with the continue statement in a ** while loop **

let i = 0;
for (let i = 1; i < 50; i = i + 2){
    console.log(i);
}