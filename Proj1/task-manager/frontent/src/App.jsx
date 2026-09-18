import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/tasks') // my API that we created
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <h1>Task Manager</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.completed ? "Completed" : "Pending"}</p>
        </div>
      ))}
      <input
        placeholder="Enter Task" />
      <button>Add Task</button>
    </div>
  )
}

export default App;