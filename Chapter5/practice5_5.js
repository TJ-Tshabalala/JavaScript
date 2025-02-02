let grid = []; // Define an empty array called grid
let numberOfCells = 64; // define var 'numberOfCells' with a initial val of 64
let counter = 0; // Define var 'counter' with initial val of 0
let row;  //Define a va 'row' that is undefined

for (let i = 0; i < numberOfCells; i++) { // Loop up to numberOfCells
    if (i % 8 === 0) { //outer loop
        if (row !== undefined) {
            grid.push(row); //push row into the empty grid array
        }
        row = []; // define row as an empty array
    }

    counter++;
    let cellValue = counter;
    row.push(cellValue);

}

grid.push(row); // Add the last row

console.log(grid);