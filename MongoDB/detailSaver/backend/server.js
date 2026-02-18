const ConnectMongo = require("./DB");
const Users = require("./model");
const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

// Middleware, to envlolve cors and parse json data
app.use(cors());
app.use(express.json());

ConnectMongo();

// GET: Retroive all user Data
app.get('/', async (req, res) => {
    try {
        const data = await Users.find({});
        res.send(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error fetching data");
    }
})

// POST: Add a mew User
app.post('/', async (req, res) => {
    try {
        const payload = req.body;
        const newUser = new Users(payload);
        await newUser.save();
        res.send("User added successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error adding user");
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
