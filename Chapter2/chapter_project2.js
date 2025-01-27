//This is the second Project for Chapter 2
//Here will will have a BMI calculator.


const prompt = require("prompt-sync")();

const heightInCm = 2.54;
const weightInKilo = 2.2046;

let inch = prompt("Provide your height in inches: ");
let pounds = prompt("Provide your weight in pounds: ");


resultOfHeight = inch * heightInCm; // Calculate the height using the user input.
resultOfWeight = pounds / weightInKilo; // Calculate the weight using the user input.

// return the result of height and weight of the user.

console.log(`The height in inches: ${inch}\n
height in cm: ${resultOfHeight}.\nThe weight in pounds: ${pounds}\n
weight in kilos: ${resultOfWeight}`);

