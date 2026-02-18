const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Middlewares
const app = express();
app.use(cors()); // It will allow frontend to communicate with backend
app.use(express.json()); //It parses JSON data from request

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

// Schema and Model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const UserModel = mongoose.model('crudTable', userSchema);

// --CRUD Routes--
//1. Create (POST)

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then((crudTable => res.json(crudTable)))
        .catch((err) => res.json(err))
})

//2. READ (GET)
app.get('/', (req, res) => {
    UserModel.find({})
        .then((crudTable => res.json(crudTable)))
        .catch((err) => res.json(err))
})

// 3. Read Single user (GET by id)
app.get('/getUser/:id', (req, res) => {
    UserModel.findById({ _id: id })
        .then((crudTable => res.json(crudTable)))
        .catch((err) => res.json(err))
})

// 4. UPDATE (PUT)
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then((crudTable => res.json(crudTable)))
        .catch((err) => res.json(err))
})

// 5. DELETE (DELETE)
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then((crudTable => res.json(crudTable)))
        .catch((err) => res.json(err))
})


// start server
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`)
})