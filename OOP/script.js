class Person { // Blueprint for Person
    constructor(name, age) { // Setup name and age when creating person
        //attributes
        this.name = name
        this.age = age
    }
    // method (Function inside class)
    display() {
        console.log(`Hello ${this.name}, Your age is ${this.age}`)
    }

}

const Lakshay = new Person('Lakshay', 21) // Making real person from blueprint
Lakshay.display()

const Aryan = new Person('Aryan', 25)
Aryan.display()
