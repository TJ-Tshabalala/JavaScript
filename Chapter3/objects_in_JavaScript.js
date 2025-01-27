// Learning about objects in JavaScript

// let arr = [0,1,2];
// console.log(typeof arr); //show you the array data type.

// define an object
let dog ={ dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "German Shepard",
    age: 4,
    burglarBitter: true
// Inside we define the properties of the dog object.
};

// If you wonder whether an something should be a property?
// follow template:  *objectname* has a(n) *propertyname*

let dogColor = dog['color'];
/* The difference between properties
and methods is the lack of parentheses for properties.
*/
let dogColor2 = dog.color;

dog["age"] = "three";
dog["color"] = "blue";
dog.weight = 7.5
let variable = "age";
let breedVar = "breed";
dog[breedVar] = 'daschund';
console.log(dog[breedVar]);
console.log(dog[variable]);
console.log(dog);