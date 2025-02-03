// // for of loop

// let names = ['Chantal','John','Maxime','Boobi','Jair'];
// for(let name of names){
//     console.log(name);
// }

// Practice Exercise

let emptyArray = [];
let i = 0;

while(i < 10){
    emptyArray.push(i);
    i++
}

//console.log(emptyArray);
for(j = 0; j < emptyArray.length; j++){
    console.log(emptyArray[j]);
}

for(let num of emptyArray){
    console.log(num);
}
