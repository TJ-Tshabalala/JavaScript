class Animal{
    constructor(breed, weight){
        this.breed = breed;
        this.weight =weight;
    }

    animalSound(){
        console.log('Generic animal sound...');
    }
}

class Dog extends Animal{
    constructor(color, breed, weight){
    super(breed, weight);
    this.color = color;
    }
    animalSound(){
        console.log('Bark!');
    }
}

let dog = new Dog('black & white',2.5, 'German Shepard');
console.log(dog.breed, "and what do you say boy?");

dog.animalSound();


