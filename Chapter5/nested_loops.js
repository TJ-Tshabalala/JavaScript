// Nested loops
//Nest multiple loops
/* syntax:
while(condition 1){
// code that gets executed as long as condition 1 is true
// this loops depends on condition 1 being true
    while(condition 2){
    // code that gets executed as long as condition 2 is true
    
    }
}
*/
 
//Example code

let arrOfArrays = []; // define an empty array
for(let i = 0; i < 3; i++){ // first loop
    arrOfArrays.push([]); // code for first condition
    for(let j = 0; j < 7; j++){ // second loop
        arrOfArrays[i].push(j); // code for second condition
    }
}

console.table(arrOfArrays);
