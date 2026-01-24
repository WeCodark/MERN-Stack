// // Conidtional statement

// //1. Simple if-else
let userAge = 15

if (userAge >= 18) {
    console.log('You can Drive')
}
else {
    console.log('You cannot Drive')
}


// //ladder if/nested if 
let examScore = 45

if (examScore >= 30) {
    console.log('You are passed')

    if (examScore >= 90) {
        console.log('Grade A')
    }
    else if (examScore >= 75) {
        console.log('Grade B')
    }
    else {
        console.log('Grade C')
    }
}
else {
    console.log('You are failed')
}


// switch Case
const prompt = require('prompt-sync')() // To take input value

let dayNumber = Number(prompt('Enter the days: '))

switch (dayNumber) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursay')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('Please enter the value between 1 - 7')
}
