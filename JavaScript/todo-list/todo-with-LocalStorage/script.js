const task = document.querySelector('.addTask')
const btn = document.querySelector('.addBtn')
const list = document.querySelector('.taskList')
const delBtn = document.querySelector('delete')

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
    savedata()
// console.log(list.innerHTML)
})

list.addEventListener('click', (e)=>{
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove()
        savedata()
    }
})

function savedata(){
    localStorage.setItem('data',list.innerHTML)
}

function getdata(){
    const data = localStorage.getItem('data')
    list.innerHTML= data
}

getdata()

// Local storage syntax
// save data (localStorage.setItem), Get data (localStorage.getItem), Remove Data(localStorage.removeItem)

// Clear all local storage --> ForEach loop, loop