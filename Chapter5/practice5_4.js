// Practice exercise 5.4
let myTable = [];
let numRows = 3;
let numCols = 4;
let counter = 0;

for (let i = 0; i < numRows; i++) {
    let tempTable = [];
    // Got stuck once I reached the 2nd loop.
    for (let j = 0; j < numCols; j++) {
        tempTable.push(counter);
        counter++;
    }
    myTable.push(tempTable);
}

console.table(myTable);

//AI generated not my code.