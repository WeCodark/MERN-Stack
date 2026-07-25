let title = document.querySelector('#title')

let btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    if (title.classList.contains('red')) {
        title.classList.remove('red')
        title.classList.add('blue')
    }
    else {
        title.classList.add('red')
        title.classList.remove('blue')
    }
})