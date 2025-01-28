let people ={
    friends:[]
}; // define the people object and define a friends array, as a property

let person1 = {
    firstName: "Wally",
    lastName: "West",
    id: 123
};  // define an object called person3, with variables firstName, lastName and ID

let person2 = {
        firstName: "Barry",
        lastName: "Allen",
        id: 789
};  // define an object called person3, with variables firstName, lastName and ID

let person3 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    id: 198
}; // define an object called person3, with variables firstName, lastName and ID

people.friends.push(person1); // Add person1 to the friends array in the people object
people.friends.push(person2); // Add person2 to the friends array in the people object
people.friends.push(person3); // Add person3 to the friends array in the people object


console.log(people.friends); // Log the result to the console, showing the "Friends", you added.