// Arrays
let arr1 = [10, 20, 30]

let arr2 = [...arr1] // Copying array
console.log(arr1)
console.log(arr2)

let arr3 = arr1

arr3.push(100)
console.log(arr1) // If we would have not used [...arr1] this would have also changed the arr1


// Merge arrays
let frontend = ['HTML', 'CSS', 'JS']
let backend = ['Node', 'Express']

let fullstack = [...frontend, ...backend] // We merge 2 arrays here 
console.log(fullstack)

// Spread in objects

let student = {
    name: 'Aman',
    age: 21
}

let newStudent = {
    ...student,
    city: 'Delhi'
}

console.log(newStudent)