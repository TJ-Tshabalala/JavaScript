// Chapter project: creating a miles-to-kilometers converter


const prompt = require("prompt-sync")();
let kms = null; // define a variable to contain the user input for kilometers

const mile = 1.60934; //define a const variable for the miles part of the converter

console.log("This is a Kilometers to Miles Converter.\nProvide the the distance in Kms to be converted to miles to get your answer.")
kms = Number(prompt("What is the distance that you are looking to convert to miles: "));

resultInMiles = kms * mile;

console.log(`The distance of ${kms} kms is equal to ${resultInMiles} miles.`);



