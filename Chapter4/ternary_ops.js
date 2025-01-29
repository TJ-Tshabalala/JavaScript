// Learning Conditional ternary operators
// Unary Operator:
// Called a unary operator becasue it only had one operand

// Ternary operator has its name, because it has three operands.
// Example:
// operand1 ? operand2 : operand3;
/* operand1 is the expression that is to be evaluated.
if the value of the expression is true, operand2 gets executed.
if value of the expression is false, operand3 gets executed.
You can read the question mark as "then" and the colon as "else" here */
// expression ? statement for true : statement associated with false;
//           operand1 then operand2, else operand3
const prompt = require("prompt-sync")();
age = Number(prompt("Enter your age: "));
let access = age < 18   ?  console.log("denied")    :   console.log("allowed");
