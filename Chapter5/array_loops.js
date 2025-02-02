// Working with Arrays and Loops

let names = ["Jarred", 'Bowen','James','Bruno'];
for(let name = 0; name < names.length; name++){
    greeting = `Hello, ${names[name]}`;
    if(names[name].startsWith('B')){ //Looks for Names startingWith the letter B
        delete names[name]; // Deletes the names starting With B, based on the condition above.
        continue; // Continues, if there are no longer names that startsWith B
    }
    console.log(greeting);
}