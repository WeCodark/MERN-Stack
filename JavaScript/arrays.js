// let x = ['1',2,true]
let arr = ['1', 2, true]

console.log(arr[2]) // accessing item at index 2
console.log(arr.length) // Total number of items - 3


// Common Array Methods

// Push() -> Add item at the back side (end)
arr.push('Aryan')
console.log(arr)


// Pop() -> Remove item from the back side (end)
arr.pop()
console.log(arr)


// shift() -> Remove item from the front side (start)
arr.shift()
console.log(arr)


// unshift() -> Add item at the front side (start)
arr.unshift('Aryan')
console.log(arr)


// include() -> Check if item is there or not (True/False)
console.log(arr.includes('Aryan'))
console.log(arr.includes('Bhavya'))


// indexOf() -> Find position number of item
console.log(arr.indexOf('Aryan'))


// slice(start,end) -> Cut piece of array (Original array not changed)
let names = ['Aryan', 'Sakshi', 'Sonal']

let slicedArray = names.slice(1, 3)
console.log(slicedArray)
console.log(names)


// splice(start,count,newItem) - Cut and change original array directly
console.log('Initial names: ')
console.log(names)

names.splice(0, 1, 'Pranav')

console.log('After splice names: ')
console.log(names)


// join() -- Make array into one big string
console.log(names.join(' or '))
