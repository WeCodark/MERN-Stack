
// // JSON String
// let student = {
//     'name': 'John',
//     'age': 30,
//     'city': 'New York'
// }

// JavaScript Object
let student = {
    name: 'Aman',
    age: 22
}

// convert Object to Json
let json = JSON.stringify(student)
console.log(json)


// convert Json to Object
let obj = JSON.parse(json)
console.log(obj)