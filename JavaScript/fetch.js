// The Fetch API allows JavaScript to request Data from a servers

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data[0].name)
})


// Perform the same thing using Async Await ---> POST Methods

// Use WeatherAPI to get Weather Details and show it on your HTML Page