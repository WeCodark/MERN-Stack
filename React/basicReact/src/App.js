import Header from "./components/Header";
import './App.css'
import { useState } from "react";
import { useEffect } from "react";



function App(){
  const [count, setCounter] = useState(0)
  useEffect(()=>{
  
  console.log('component rendered')
},[])
return (
  <div>
    <h1>Count: {count}</h1>
         <button onClick={()=> setCounter(count + 1)}>Increment</button>
  </div>
)

}




// function handleClick(){
//   console.log('button Clicked')
// }

// function App() {

//   useEffect(()=>{
//   console.log('What ever you want to d, you add the mounted component here');
// },[]);
// // console.log('What ever you want to d, you add the mounted component here');
//   const name = 'Aryan'
//   const [count, setcount] = useState(0);
//   // count - Current Value
//   // setCount - Updates Value
//   // useState updates the UI automatically

//   return (
//     <div>
//     <h1>Hello {name}</h1>
//     <Header name = 'Aryan' age = '28'/>

//     <h1>Count: {count}</h1>
//     <button onClick={()=> setcount(count + 1)}>
//     Increment
//     </button>

//     <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

export default App;