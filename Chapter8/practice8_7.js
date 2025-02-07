// 1. Create a Date object (example: October 26, 2024)
const myDate = new Date(2024, 9, 26); // Note: Month is 0-indexed (0 = January, 9 = October)
console.log("Date Object:", myDate);

// 2. Array of month names
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const prompt = require('prompt-sync')();
// 3. Get the day
const day = myDate.getDate();

// 4. Get the year
const year = myDate.getFullYear();

// 5. Get the month (0-indexed)
const monthIndex = myDate.getMonth();

// 6. Get the month name using the index
const monthName = monthNames[monthIndex];

// 7. Output the result
console.log("Date:", `${monthName} ${day}, ${year}`);
let anyDate = new Date();
// console.log(anyDate);
const months = ['January', 'Febuary','March','April','May','June','July','August','September','October','November','December'];
console.log(anyDate.getDate());
console.log(anyDate.getFullYear());
console.log(anyDate.getMonth());

let month = months;
let holdDate = Number(prompt("Pick a date: "));

console.log(month[holdDate - 1]);
