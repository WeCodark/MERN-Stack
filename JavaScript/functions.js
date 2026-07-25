// // // Function Declarations
// // function hello() {
// //     console.log('Hey Everyone')
// // }

// // // // Function calling
// // // hello()
// // // hello()
// // // hello()
// // // hello()
// // // hello()

// // // Functions with parameter
// // function hello(name) {
// //     console.log('hello ' + name)
// // }

// // hello('Aryan')
// // hello('rishab')
// // hello('Aron')

// // // Function returing value
// // function add(a, b) {
// //     return a + b;
// // }

// // let result = add(10, 60)
// // console.log(result)

// // function square(num) {
// //     return num ** 2
// // }

// // console.log(square(5))

// // Scope
// // global scope --> Accessible everywhere

// let name = 'Aman'
// function greet() {
//     console.log(name)
// }
// greet()
// console.log(name)

// // Local Scope --> Accessible only inside the function
// function test2() {
//     let age = 20
//     console.log(age)
// }

// test2()
// // console.log(age)

// // block scope
// // if (true) {
// //     let city = 'Delhi'
// //     console.log(city)
// // }

// // console.log(city)

// // var , let, const 

// if (true) {
//     var city = 'Delhi' // Var allow the varibale to escape block scope
//     console.log(city)
// }

// console.log(city)

// // this is the reason why nowadays ppl prefer let and const only rather than var

// // // Arrow Function

// function hello(name) {
//     console.log('hello ' + name)
// }
// hello('Aman')

// // arrow function

// const hello = (name) => {
//     console.log('hello ' + name)
// }
// hello('Aman')

// // In one line also you can declare a function --> If the function is having only one single return statement then you can write it in one line
// const square = num => num ** 2

// console.log(square(6))

// Data Structures

// Array --> ordered collection of elements

// let fruits = ['apple', 'banana', 'mango']
// // you can access individual elements via indexing
// console.log(fruits[0]) // apple
// console.log(fruits[1]) // banana
// console.log(fruits[2]) // mango

// // Adding Value
// let fruits = ['apple', 'banana', 'mango']
// // .push() -> allow you to add new element in an array
// fruits.push('Orange')
// console.log(fruits)
// //pop --> if you want to remove last item
// fruits.pop()
// console.log(fruits)

// // Different Data types are allowed in your JS arrays
// let num = [1, 2, '3', true]
// console.log(num)

// console.log(fruits.length)

// // How we can loop through an array

// let number = [10, 20, 30, 40]
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i])
// }

// Object --> Collection of key-value pairs

// let student = {
//     name: 'Aman',
//     age: 25,
//     city: 'Delhi'
// }

// console.log(student)

// console.log(student.city)

// student.name = 'Aryan'

// console.log(student)

// // To add new key value pair

// student.batch = 2026
// console.log(student)


// We can create a new array --> map() --> Output will be an array

// let x = [1, 2, 3, 4]

// let square = x.map((num) => {
//     return num ** 2
// })

// console.log(square) // Square is a new array --> where original array (x) is remained unchanged


// let price = [100, 200, 300]

// let gst = price.map((p) => p + (p * 0.18))

// console.log(gst)


// let ages = [12, 18, 25, 14, 30]

// let adults = ages.filter((a) => a >= 18)
// console.log(adults)

// let numbers = [1, 2, 3, 4, 5, 6]

// let even = numbers.filter((n) => n % 2 == 0)

// console.log(even)

// Reduce
// let num = [10, 40, 30]

// let total = num.reduce((max, current) => {
//     if (current > max) {
//         return current
//     }
//     return max
// })

// console.log(total)