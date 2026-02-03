const apiUrl = "https://crudcrud.com/api/35861e9944b943edbdaa2abc5e2dc2a4/todos"
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');



async function fetchTodos() { // Get list from server
    const res = await fetch(apiUrl); // Call the API
    const todos = await res.json(); // Convert data to readable format
    list.innerHTML = '';
    todos.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t.task;

        const edit = document.createElement('button');
        edit.textContent = 'Edit';
        edit.onclick = async () => {
            const newTask = prompt('Edit task:', t.task);
            if (newTask) {
                await fetch(`${apiUrl}/${t._id}`, { // Update data on server (PUT)
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ task: newTask, completed: false })
                });
                fetchTodos();
            }
        };

        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.onclick = async () => {
            await fetch(`${apiUrl}/${t._id}`, { method: 'DELETE' }); // Remove data from server
            fetchTodos();
        };

        li.append(edit, del);
        list.appendChild(li);
    });
}

addBtn.onclick = async () => { // When add button is clicked
    const task = input.value.trim();
    if (task) {
        await fetch(apiUrl, { // Send data to server (POST)
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task, completed: false })
        });
        input.value = '';
        fetchTodos();
    }
};

fetchTodos();