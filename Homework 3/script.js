class Animal {
    constructor(name, type, age, size, isEaten = false) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = isEaten;
    }
}
const zebra = new Animal("zebra", "herbivore", 10, 1.52)
const lion = new Animal("lion", "carnivore", 12, 2.1, true)
