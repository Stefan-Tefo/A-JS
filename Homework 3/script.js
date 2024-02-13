class Animal {
    constructor(name, type, age, size, isEaten = false) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = isEaten;
        this.eat = function (animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
            }
            if (this.type === "carnivore") {
                console.log(`The animal ${this.name} ate the ${animal.name}.`);
            }
            if (this.size <= animal) {
                console.log(`The animal ${this.name} tried to eat the ${animal.size} but it was too large.`);
            }
            if (this.type === "omnivore") {
                console.log(`The animal ${this.name} is eating ${this.type} `);
            }
        }
    }
}
const zebra = new Animal("zebra", "herbivore", 10, 1.52)
const lion = new Animal("lion", "carnivore", 12, 2.1, true)
const human = new Animal("Stefan", "omnivore", 20, 1.84)

console.log(lion.eat(zebra));
console.log(zebra.eat(lion));
console.log(human.eat());