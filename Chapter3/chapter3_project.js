// This is the chapter project for chapter 3

// Task 1
// Manipulate an array

const theList = ['Laurence','Svekis',true, 35, null, undefined, {test: 'one', score: 55}, ['one','two']]; // define an array

theList.splice(2,7); // Manipulate the array to delete 7 items starting from the second item or 3 index position.
theList.shift('Laurence'); // Remove the value Laurence from the array.
theList.unshift('FIRST'); // Add the value FIRST, to the first index (0).
theList.splice(2,0,"MIDDLE", "hello World"); // Use splice method to manipulate the array to start adding the values 'MIDDLE' & 'hello World'
theList.push("LAST"); // Use the push method to add a value at the end of the array


console.log(theList); // Log the results to the console. Result should be ['FIRST', 'Svekis', 'MIDDLE', 'hello World', 'LAST']

// Company product catalog
let storeItems = [];

let item1 = {
    name: "item1",
    model: undefined,
    cost: 0.0,
    quantity:0
};

let item2 = {
    name: "item2",
    model: undefined,
    cost: 0.0,
    quantity:0
};

let item3 = {
    name: "item3",
    model: undefined,
    cost: 0.0,
    quantity:0
};
storeItems.push(item1); // add item1 object to the storeItems array
storeItems.push(item2); // add item2 object to the storeItems array
storeItems.push(item3); // add item3 object to the storeItems array
console.log(storeItems); // Log the array to the console.

let thirdItem = storeItems[2].quantity = 300; // Define a var called thirdItem & Call item3 and give one of its property(quantity) a value of 300
console.log(thirdItem); // log the quantity value for the object item3, that is found within the storeItem array.
