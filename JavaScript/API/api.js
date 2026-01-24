// // With Then we are fetch api
// fetch('https://jsonplaceholder.typicode.com/posts/3')
//       .then(response => response.json())
//       .then(json => console.log(json))

// // using async await
// async function getValue(){
//       let response = await fetch('https://jsonplaceholder.typicode.com/posts/3')
//       let data = await response.json()
//       console.log(data)
// }

// getValue()

function getUserName(user){
      try{
            console.log(`The user's name is ${user.name}`)
      } catch (error){
            if (error instanceof TypeError){
                  console.error('Error: Object is not valid so name nahi le paa rhaa')
            } else {
                  console.error('Unkown error hai: ',error)
            }
      }
}

const validUser = {name:'Aryan'}
const invalidUser = undefined

getUserName(validUser)
getUserName(invalidUser)