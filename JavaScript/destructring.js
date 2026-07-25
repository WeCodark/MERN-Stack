// Arrya Destructring

let fruits = ['Apple', 'Banana', 'Mango']

// console.log(fruits[0])

let [first, , third] = fruits

// console.log(first)
// console.log(third)

// Object Destructring

let student = {
    name: 'Aman',
    age: 20,
    city: 'Delhi'
}

let { name, age, city } = student
// console.log(name)
// console.log(age)
// console.log(city)

let { name: studentName } = student
console.log(studentName)