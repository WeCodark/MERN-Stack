// Data Types --> Primitive Data Types
// Three different ways you can create Variables --> Let(Update the value after creation) --> Local Scope Variable
// , Const(Cannot Update the value after creation) --> Local Scope Variable
// , Var(Update the value after creation) --> Global Scope Variable

let num = 10 // Number data type where 10 is value and num is variable that hold value 10
let userName = 'Aman' // String
let isRaining = false // Boolean Either True or False

let emptyblock = null // null --> Empty value
let notCreated //undefined --> Variable declared but value is not assigned

let sym = Symbol('empID') //Symbol --> Unique value and immutable Values

// console.log(emptyblock)
// console.log(typeof (sym))

// Operators in JavaScripts --> they are symbols used to perform operations on values and varaibles
let x1 = 5
let y1 = 2

// Arithmatic Operators --> Mathematical Caluclations
let addition = x1 + y1
console.log(`${x1} + ${y1} = ${addition}`)

let sub = x1 - y1
console.log(`${x1} - ${y1} = ${sub}`)

let mul = x1 * y1
console.log(`${x1} * ${y1} = ${mul}`)

let div = x1 / y1
console.log(`${x1} / ${y1} = ${div}`)

let rem = x1 % y1 // Modulus
console.log(`${x1} % ${y1} = ${rem}`)

let power = x1 ** y1 // Power Operator
console.log(`${x1} ** ${y1} = ${power}`)

// Printing Output With Variables
let x2 = 10

console.log('The value of x is ' + x2) // String Concat --> Complete String
console.log('The Value of x is', x2) // using comma (add space automatically) ---> The value of variable will be its datatyp
console.log(`The value of x is ${x2}`) // Template Literals ---> Complete string


//2. Increment and Decrement Operator
let a1 = 10
console.log(a1++) // Postfix increment
console.log(a1)
console.log(--a1) // prefix Decrement

//3. Assigment Operator
let a2 = 10
a2 *= 2 // a2 = a2 * 2
console.log(a2)
a2 /= 2 // a2 = a2 / 2
console.log(a2)
a2 %= 2 // a2 = a2 % 2
console.log(a2)
a2 += 2 // a2 = a2 + 2
console.log(a2)
a2 -= 2 // a2 = a2 - 2
console.log(a2)
a2 **= 2 // a2 = a2 ** 2
console.log(a2)

//4. Comparison Operator
let x3 = 10
let y3 = '10'

let result = x3 == y3 // True ==> (==) Checks only value, not data Types
console.log(result)

result = x3 === y3 // False ==> (===) Checks both value and Data Types
console.log(result)

// 5. Logical operator
let age = 17
let drivingLicense = true
// Logical AND Operator ---> 
console.log(age > 18 && drivingLicense)

// 6. Ternary Operator --> In order to check 1 condition, Ternary Operator
let age2 = 16
let msg = (age2 >= 18 ? 'Adult' : 'Minor')
console.log(msg)