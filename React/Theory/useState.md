## useState (managing Data)
* Normal Variables are not going to update the screen when change
* State is special Variable in React. When State changes, React re-renders the component.

## Syntax

```
import { useState } from 'react'

function Counter(){
    // Count = Current Value,
    // setCout = Function to update it
    const [count, setCount] = useState(0)  // Initial value is 0

    return(
        <button onClick={setCount(count + 1)}>Click Me {count}</button>
    )
}
```
