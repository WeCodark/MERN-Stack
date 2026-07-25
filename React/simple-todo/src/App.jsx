import { useState, useEffect } from "react";
import './App.css'

export default function App() {

  // Step 1: State Definitions
  // State 1: Holds the Todo List
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('my-todo')
    return saved ? JSON.parse(saved) : []
  })
  // State 2: Input Box Text
  const [input, setInput] = useState('')

  // Step 2: Side Effects
  useEffect(() => {
    localStorage.setItem('my-todo', JSON.stringify(todos))
  }, [todos]) // run every time todos change


  // Step 3: Action Handlers
  const handleAdd = (e) => {
    e.preventDefault() // prevents page reload
    if (!input.trim()) return; // don't add empty todos

    const newItem = {
      id: Date.now(),
      title: input.trim(),
      isDone: false
    }
    setTodos([...todos, newItem]) // Add new items to array
    setInput('') // Clear input
  }

  //toggle completed status
  const handleToggle = (id) => {
    const updated = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone }
      }
      return item;
    })
    setTodos(updated)
  }

  //delete todo
  const handleDelete = (id) => {
    const updated = todos.filter((item) => item.id !== id)
    setTodos(updated)
  }

  // Step 4: UI
  return (
    <div className='card'>
      <h2>Todo App</h2>

      {/* Form to Add Items */}
      <form onSubmit={handleAdd} className="form">
        <input
          type='text'
          placeholder="What needs to be done"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      {/* Todo List */}
      <ul className="list">
        {todos.length === 0 && <p className="empty">No items yet!</p>}

        {todos.map((todo) => (
          <li key={todo.id} className="list-item">
            <span
              onClick={() => handleToggle(todo.id)}
              className={todo.isDone ? 'done' : ''}
            >{todo.title}</span>

            <button onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}
