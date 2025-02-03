//For in loop
// Manipulating objects with loops

// define car object
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black"

};

// Use for in loop to go through the car object
for (let prop in car){
    console.log(prop,":",car[prop]);
}


// For of gets the values (keys) and not the property names
// For in get the property names and not the values (keys)