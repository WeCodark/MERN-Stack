# UseEffect (Automatic Actions)

Used when you want to run the code outside of the component, such as making an API call, updating the DOM, or saving data to localStorage.

## Syntax
```
import {useEffect} from 'react'

useEffect(() => {
    // Code to run
}, [dependencyArray]) // if empty array, runs once
```

