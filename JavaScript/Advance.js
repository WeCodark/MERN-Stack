// Asynchronus Programming -> Doing things separately (in background) so main work doesn't stop
console.log('start')

setTimeout(() => {
    console.log('Hey, this is aryan and it will be printented afger 5 sec')
}, 5000) // runs after 5000

console.log('end')


// Callback Hell (Nested set Timeout) -> Too many waiting inside waiting (Very Confusing)

setTimeout(() => {
    console.log('1') // After 2 sec
    setTimeout(() => {
        console.log('2') // Aftet 3 second -- (but at 5 sec)
        setTimeout(() => {
            console.log('3') // after 1 sec -- But at 6 sec
        }, 1000)
    }, 3000)
}, 2000)


// Promise -> I promise to do it. If success -> resolve, if fail -> reject
let promise = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve('order Delivered')
    } else {
        reject('delivery Failed')
    }
})

promise.then((result) => {            // Then takes resolve output (Success)
    console.log('Success', result)
}).catch((error) => {                 // Catch will take reject output (Fail)
    console.log('Error', error)
})


// Promise Chaining -> One after another
new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000)
}).then((res) => {
    console.log(res) // 1
    return res + 1
}).then((res) => {
    console.log(res) // 2
    return res + 1
})
    .then((res) => {
        console.log(res) // 3
    })


// Do the promise chaining but with delay
new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000)
})
    .then((res) => {
        console.log(res) // 1
        return new Promise((resolve) => {
            setTimeout(() => resolve(res + 1), 1000)
        })
    })
    .then((res) => {
        console.log(res) // 2
        return new Promise((resolve) => {
            setTimeout(() => resolve(res + 1), 1000)
        })
    })
    .then((res) => {
        console.log(res) // 3
    })


// Async Await
// It is basically cleaner and more readable way to handle promises (Best way)
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data Recived'), 2000)
    })
}

async function showData() {
    const data = await fetchData() // It will wait for fetch Data to complete (Pause here)
    console.log(data)
}

showData()


// Practical example
function getFood() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved('Pizza is here.....')
        }, 5000)
    })
}

async function serveFood() {
    console.log('Ordering Pizzaa.....')
    let food = await getFood() // Waiting for pizza
    console.log(food)
    console.log('Enjoy your pizza')
}

serveFood()
