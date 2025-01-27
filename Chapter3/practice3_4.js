// define a new object called myCar
let myCar = {
    make:undefined,
    model: undefined,
    year: undefined,
    color:undefined,
    mileage: 0,
    canStart: true
};

// Create variable called funnyThings
// Assign new property string value to it
//Use var to reference property within myCar and use the var within the square bracket notation to assign a new value to the color property in myCar.
let funnyThings = "color";
myCar[funnyThings] = "blue";
console.log(myCar[funnyThings]);

funnyThings = "forSale";
myCar[funnyThings] = true;
console.log(myCar[funnyThings]);
myCar.make = "Porsche";
myCar.model = "911";
console.log(myCar.make, myCar.model);
console.log(`For sale: ${myCar[funnyThings]}`);


