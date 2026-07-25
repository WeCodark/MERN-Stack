let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

let tasks = [];

function renderTasks() {

    list.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <div>
                <button onclick="completeTask(${index})">Done</button>
                <button onclick="deleteTask(${index})">Deleted</button>
            </div>
        `;

        list.appendChild(li);

    });

}

button.addEventListener("click", () => {

    let task = input.value.trim();

    if (task === "") return;

    tasks.push({

        text: task,

        completed: false

    });

    input.value = "";

    renderTasks();

});

function deleteTask(index) {

    tasks.splice(index, 1);

    renderTasks();

}

function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    renderTasks();

}