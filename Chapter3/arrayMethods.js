favouriteFruits = ['grapefruit','orange','lemon'];
favouriteFruits.push('tangerine');

//Add lime to the favouriteFruits array

let lengthOfFavouriteFruits = favouriteFruits.push('lime');

// Console.log() will return the favouriteFruits list
console.log(favouriteFruits);

// Console.log() will return length of array
console.log(lengthOfFavouriteFruits);


// Create an array containing shapes

let arrOfShapes = ['circle', 'triangle','rectangle','pentagon'];


arrOfShapes.splice(2,2, 'square','trapezoid');
console.log(arrOfShapes);

// finding elements

arr8 = [2, 6,7,8];
let findValue = arr8.find(function(e) {return e === 6});
let findValue2 = arr8.find(e => e === 10);

console.log(findValue, findValue2);

// Using indexOf to find the index of an element

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);

console.log(findIndex, findIndex2);

// The last occurence can be found using the lastIndexOf() method

let animals = ['dogs', 'horse', 'cat', 'platypus', 'dog'];
let lastDog = animals.lastIndexOf('platypus');
console.log(lastDog);

// Sorting, a built-in method for sorting arrays
// Sort numbers from small to high and string from A-Z

let names = ['James','Bert','Fatiha','Maria'];
names.sort();
console.log(names);

let ages = [18, 72, 33, 56, 40];
ages.sort();

console.log(ages);
 // Reverse method used ot reverse an array.

 names.reverse();

 console.log(names);