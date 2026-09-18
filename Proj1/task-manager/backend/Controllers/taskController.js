const tasks = require('../data/tasks')

const getTasks = (req, res) => {
    res.json(tasks)
}

const getTask = (req, res) => {
    const id = Number(req.params.id)
    const task = tasks.find(task => task.id === id)
    if (task) {
        res.json(task)
    } else {
        res.status(404).json({ message: 'Task not found' })
    }
}

const createTask = (req, res) => {
    const { title } = req.body
    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false
    }
    tasks.push(newTask)
    res.status(201).json(newTask)
}

const updateTask = (req, res) => {
    const id = Number(req.params.id)
    const task = tasks.find(task => task.id === id)
    if (task) {
        task.completed = !task.completed
        res.json(task)
    } else {
        res.status(404).json({ message: 'Task not found' })
    }
}

const deleteTask = (req, res) => {
    const id = Number(req.params.id)
    const taskIndex = tasks.findIndex(task => task.id === id)
    if (taskIndex !== -1) {
        return res.status(404).json({ message: 'Task not found' })
    }
    const deletedTask = tasks.splice(taskIndex, 1)
    res.json({ message: 'Task deleted' })
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}
