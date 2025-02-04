class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let p = new Person('Tj','Tshabalala');
let q = new Person('Brian','Cage');

const greeting = 'Hi!';
console.log(greeting, p.firstName,p.lastName,"and",q.firstName,q.lastName);