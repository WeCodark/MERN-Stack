const express = require('express')
const cors = require('cors')
require('dotenv').config()
const taskRoutes = require('./routes/taskRoutes')
const logger = require('./middleware/logger')

const app = express()

const PORT = process.env.PORT || 3000

//Middleware
app.use(cors())
app.use(express.json())
app.use(logger)
app.use('/api/tasks', taskRoutes)

//Home Route
app.get('/', (req, res) => {
    res.json({
        message: 'Task manager API is runnings'
    })
})

// server start
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})