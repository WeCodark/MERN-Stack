// var name = 'Aryan'
var userNameVar = 'Aryan'
console.log(userNameVar)


// let User = 'Aryan'
let userNameLet = 'Aryan'
console.log(userNameLet)


// let x = 10
let x = 10
console.log(x)


// x += 10
x += 10
console.log(x)


// const empID = 1012
const empID = 1012
console.log(empID)
// // empID = 1021


// // Difference between Var and Let
if (2 == 2) {
    var p = 10
    let q = 20
}

console.log(p)

try {
    console.log(q)
} catch (error) {
    console.log('q is not accessible outside the block')
}


// // Redecalarion of variable
var a = 20
var a = 60
console.log(a)


// let b = 10
let b1 = 10
// let b  =20
let b2 = 20


for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}


for (let j = 1; j <= 3; j++) {
    setTimeout(() => {
        console.log(j)
    }, 1000)
}
