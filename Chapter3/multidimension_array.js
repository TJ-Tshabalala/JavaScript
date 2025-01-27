let someValues1 = [1,2,3];
let someValues2 = [4,5,6];
let someValues3 = [7,8,9];
let arrOfArrays = [someValues1, someValues2, someValues3];
// Multi-dimension array, this is a 2D array.
let arrOfArrays2 = [[1,2,3],[4,5,6],[7,8,9]];

let value01 = arrOfArrays[0][1];
let value02 = arrOfArrays2[2][2];

console.log(value01, value02);

arryOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arryOfArraysOfArrays);

let middleValue = arryOfArraysOfArrays[1][1][1]; // Need to find a way to explain this to myself
console.log(middleValue);