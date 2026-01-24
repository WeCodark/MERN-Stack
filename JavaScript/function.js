// // 1. Normal Function

NameHii()
NameHii()
NameHii()
NameHii()

function NameHii() {
    console.log('Hello World')
}


// // 2. Function Expresion

const TrialFunc = function () {
    console.log('Hello, This is a trial function')
}

TrialFunc()


// // 3. Arrow Function (ES6) - It is short and modern syntax for writing a function
const add = (a, b) => a + b
console.log(add(4, 5))


// //4. Constructor Fucntion: When you want to create multiple objects of the same structure 

function Employee(name, age) {
    this.name = name
    this.age = age
}

const emp1 = new Employee('Aryan', 25)
console.log(emp1.name)

const emp2 = new Employee('Rahul', 20)
console.log(emp2.age)


// // 5. Callback Function -> Whena  function is passed as an argument to another function
function introUser(callback) {
    console.log('Hello, User')
    callback()
}

function bye() {
    console.log('Good Night')
}

introUser(bye)


// 6. Recursive Function
function factorial(n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))
