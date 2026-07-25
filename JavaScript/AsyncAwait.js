function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Stundet Data')
        }, 3000)
    })
}

async function showData() {
    let result = await getData()
    console.log(result)
}

showData()