// console.log('Hello') --> For checking my nodeJS is working
console.log('Hello')


// // Data Types --> Primitive DataTypes)

let num = 10 // number
let userName = 'Aryan' // String
let isRaining = false // boolean

let emptyBlock = null // null -> Represents an empty value
let notCreated // undefined -> Variable declared but not assigned

let sym = Symbol('empID') // Symbol - unique and immutable values

console.log(emptyBlock)
console.log(typeof (sym))


// Operators in JavaScript -> operators are symbols used to perform operations on values and variables

// // 1. Arithimatic Operator

let x1 = 10
let y1 = 20

let addition = x1 + y1
console.log(`${x1} + ${y1} = ${addition}`)

let sub = x1 - y1
console.log(`${x1} - ${y1} = ${sub}`)

let multiply = x1 * y1
console.log(`${x1} x ${y1} = ${multiply}`)

let divide = y1 / x1
console.log(`${y1} / ${x1} = ${divide}`)

let remainder = y1 % x1
console.log(`${y1} % ${x1} = ${remainder}`)

let exponent = x1 ** 3
console.log(`${x1} to the power 3 = ${exponent}`)


// // Bonus -> Printing output with variables
let x2 = 10
console.log('The value of x is ' + x2) // using string concatenation
console.log('The value of x is', x2) // using comma (add space automatically)
console.log(`The value of x is ${x2}`)


// // 2. Increment and Decrement Operator
let a1 = 10
console.log(a1++)
console.log(a1)
console.log(--a1)


// // 3. Assignment Operator
let a2 = 10
a2 *= 2
console.log(a2)


// // 4. Comparison Operator
let x3 = 10
let y3 = '10'

let result = x3 == y3 // true -> (==) checks only the value, not data type
console.log(result)

result = x3 === y3 // False
console.log(result)


// 5. Logical Operator
let age1 = 25
let drivingLicense = true

console.log(age1 > 18 && drivingLicense)


// //6. Ternary Operator
let age2 = 18
let msg = (age2 >= 18 ? 'Adult' : 'Minor')
console.log(msg)
