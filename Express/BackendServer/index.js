const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    reply = 'server is running on get'
    res.json({ reply })
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})