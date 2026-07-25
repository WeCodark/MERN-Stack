// A promise represents a future values --> Its either Resolved (Success) or Rejected (Failure)

let myPromise = new Promise((resolved, reject) => {
    let Success = false

    if (Success) {
        resolved('Data Loaded')
    }
    else {
        reject('Server Error')
    }
})

// We need to use it in order to see output

// we use .then()

myPromise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})