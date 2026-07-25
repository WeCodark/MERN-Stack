// It is a function that is being Passed to another function as an arguments

function wish(name) {
    console.log('Hello ' + name)
}

function processUser(callBack) {
    callBack('Pranav')
}

processUser(wish) // We are passing function as an argument