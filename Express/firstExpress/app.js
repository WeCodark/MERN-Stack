const express = require('express')

const app = express()

app.use(express.json())


// //  Route --> what should happen when a client requests a particuluar URL using a particular HTTP method
// // In this case, when a client requests the root URL ('/') using the GET HTTP method
// app.get('/', (req, res) => {
//     res.send("Hello everyone, My first express server")
// })

// app.get('/users/:userID/orders/:orderID', (req, res) => {
//     console.log(req.params)

//     res.json({
//         userID: req.params.userID,
//         orderID: req.params.orderID
//     })
// })


// // Query Parameter

app.get('/users', (req, res) => {
    console.log(req.query)
    res.json(req.query)
})

// POST Requests

app.post('/users', (req, res) => {
    console.log(req.body)
    res.status(201).json({
        message: "User Created",
        user: req.body
    })
})


app.listen(3000)

// Different HTTP Methods
// 1. GET --> Fetching data from the server
// 2. POST --> Pushing or Creating data on the server
// 3. PUT/PATCH --> Updating data on the server
// 4. DELETE --> Deleting data on the server
