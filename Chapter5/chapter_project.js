// Chapter Project - Math Multiplication table

let tableArray = [];
let output = 7;


for( let i =0; i < output; i++){
     let tempArray = [];
     for(let j =0; j < output; j++){
        tempArray.push(i * j);
       

     }
     tableArray.push(tempArray);
}

console.log(tableArray);