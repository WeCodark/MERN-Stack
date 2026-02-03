const task = document.querySelector('.addTask')
const btn = document.querySelector('.addBtn')
const list = document.querySelector('.taskList')

btn.addEventListener('click',()=>{
    const li = document.createElement('li')
    li.textContent = task.value
    task.value = ''

    const del = document.createElement('button')
    del.classList.add('delete')
    del.textContent = 'Delete'
    del.style.margin = '2px'

    del.addEventListener('click', ()=>{
        li.remove()
    })
    li.appendChild(del)
    list.appendChild(li)
})


// Local storage syntax
// save data (localStorage.setItem), Get data (localStorage.getItem), Remove Data(localStorage.removeItem)

// Clear all local storage --> ForEach loop, loop