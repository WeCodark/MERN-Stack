import React, { useState } from 'react';
import './App.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }


    return (
    <div className='counterDiv'>
        <h1>Counter Example using React Hooks (UseState)</h1>
        <p className='count'>Current Count: {count}</p>
        <div className='btn-grp'>
            <button className='btn' onClick={increment}>Increment</button>{' '}
            <button className='btn' onClick={decrement}>Decrement</button>{' '}
            <button className='rst-btn' onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
)

}



export default Counter;
