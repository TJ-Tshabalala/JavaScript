// Methods
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }

    fullName(){
        console.log(this.firstName,this.lastName);
    }
}

let p = new Person('TJ', 'Tshabalala');
p.fullName();