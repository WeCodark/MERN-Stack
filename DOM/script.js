const displayText = document.getElementById('my-text') // Find element by ID
const actionBtn = document.getElementById('my-button')

const inputBox = document.getElementById('user-input')

// function makeMagicHappen() {

//     if (displayText.style.color === 'red'){
//         displayText.innerText = 'Original Text'

//     displayText.style.color = 'black'

//     displayText.style.backgroundColor = 'transparent'
//     } else{
//     displayText.innerText = 'Hello! I am Aryan'

//     displayText.style.color = 'red'

//     displayText.style.backgroundColor = 'yellow'
//     }
// }

// Function to update text (Old version)
function updateText() {
    const userText = inputBox.value
    if (userText === '') {
        alert('please type something')
    } else {
        displayText.innerText = userText
    }
}

// Function to update text (New version with styles)
function updateText() {
    const userText = inputBox.value // Get text from input box
    if (userText === '') {
        alert('please type something')
    } else {
        displayText.innerText = userText // Change text inside
        displayText.style.backgroundColor = 'red' // Change background color
        displayText.style.color = 'yellow' // Change text color
    }
}
actionBtn.addEventListener('click', updateText) // Wait for click, then run function
