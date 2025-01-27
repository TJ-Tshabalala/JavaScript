//Practice create a variable for 3 numbers
// a,b,c. Update these variables with the following actions:
/* Add b to a
Divide a by c
Replace the value of c with the modulus of c and b
Print all three numbers to the console */

let a = 5;
let b = 6;
let c = 8;



a +=b;
a /=c;
c = c%b;

console.log(`${a}\n${b}\n${c}`);