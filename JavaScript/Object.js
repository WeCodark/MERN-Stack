// Object and its method
// Object is like a bag with label and value
// Key: Label (Property Name)
// Values: Data inside label (string, number, function, another object)

let Person = {
    name: 'Aryan',
    age: '25',
    isStudent: true,
}

console.log(Person.age)
console.log(Object.keys(Person)) // Get all Label names
console.log(Object.values(Person)) // Get all Values inside labels
console.log(Object.entries(Person)) // Get both Label and Value together


let ob1 = { a: 1 }
let ob2 = { b: 2 }

let mergedObject = Object.assign({}, ob1, ob2) // Mix two objects into one
console.log(mergedObject)


// Object.freeze() -> Lock object, no changes allowed
let user = { id: 101, name: 'John' }

Object.freeze(user)

console.log(user.name)

user.name = 'Aryan' // This will not work because object is locked

console.log(user)
