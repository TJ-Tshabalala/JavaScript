// Practice Exercise 5.2

let counter = 0; //Set starting counter
let step = 1; // Used to increase the counter
let result;
do{
    counter +=step;
    result = `Counter: ${counter}`;
    
    console.log(result);
}
while(counter < 100);
