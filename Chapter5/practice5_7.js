// Practice the for in loop practice exercise 5.7

let person = {
    name: "Junior",
    age: 25,
    goal: "Developer",
};

for(let prop in person){
    console.log(person[prop]);
};

let human = ["Junior", 25, "Developer"];

for(let i = 0; i < human.length; i++){ //For loop to go through the human array
    console.log(human[i]);
}

for(let guy in human){
    console.log(human[guy]);
}