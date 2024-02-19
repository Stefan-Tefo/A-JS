// # Homework
// ## Create a class Animal that has:
// * name
// * type - carnivore/herbivore/omnivore
// * age
// * size
// * eat - a method that checks if the input is an Animal.
// 	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
// 	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
// 	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
// 	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
// * isEaten = default false

class Animal {
    constructor(name, type, age, size, isEaten = false,) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = isEaten;
    }
    eat(animal) {
        if (this.type === "herbivore") {
            console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
        } else if (this.name === "carnivore" || this.isEaten == true) {
            console.log(`The animal ${this.name} ate the ${animal.name}.`);
        } else {
            console.log(`The animal ${this.name} tried to eat the ${animal.name} but it was too large.`);
        }
        if (this.type === "omnivore") {
            console.log(`The animal ${this.name} is eating ${this.type}`);
        }
    }
}

const zebra = new Animal("zebra", "herbivore", 10, 1.52)
const lion = new Animal("lion", "carnivore", 12, 2.1, true)
const human = new Animal("Stefan", "omnivore", 20, 1.84)

zebra.eat()
lion.eat(zebra)
human.eat(lion)