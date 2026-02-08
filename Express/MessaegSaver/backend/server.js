const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors()); // It enables Cross Origin Resource Sharing
app.use(express.json()) // It enables the server to parse JSON data

app.post('/save', (req, res) => { // Here, We are defining the POST API Route -> It will get triggered when the frontend sends a POST request to the /save 
    //{message: "Hello World"}
    const { message } = req.body; // we are extracting the message sent from the frontend 
    fs.appendFile('message.txt', message + '\n', (err) => {
        if (err) return res.status(500).send('Failed to save Message') // res.status(500) -> It is sending the status code 500 -> It means Internal Server Error
        res.send('Message saved successfully') // res.send() -> It is sending the response to the frontend
    })
})

app.listen(5000, () => {
    console.log(`server is running on http://localhost:5000`) // It is printing the message in the console
})
