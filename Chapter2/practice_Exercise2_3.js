/* Practice: Write code that will calculate the hypotenuse of a triangle using the Pythagorean
thereom when gicen the values of the other two sides. The theorem specifies theat the relation
between the sides of a right-angled triangle is a^2 + b^2 = c^2 */

const prompt = require("prompt-sync")();

console.log("Let's get the hypotenuse of a triangle using the Pythagorean theroem.")
let a = prompt("Provide the size of the first side of the triangle: ");
let b = prompt("Provide the side of the second side of the triangle: ");

result = (a**2) + (b**2);

console.log(`The hypontenuse is: ${result}`);

let getResultofC = prompt("Would you like the square-rooted value of c? (yes/no): ").toLowerCase();

if(getResultofC === "yes"){
    c = Math.sqrt(result);
    console.log(`${c}`);
}
else{
    console.log("Alright, now we calculated the hypotenuse.");
}