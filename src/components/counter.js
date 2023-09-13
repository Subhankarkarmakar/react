import React, {useState} from 'react'

function Counter() {
    const initialValue = 0;
    const[count, setCount] = useState(initialValue);

    const ResetValue = () => {
        setCount(initialValue);
    }

    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return (
    <>
    <div className='text-center'>
        <h2 className='text-center'>Counter</h2>
        <p>Count: {count}</p>  
        <button onClick={ResetValue} className='bg-green-500 text-white p-2 m-2 rounded-md'>Reset</button>
        <button onClick={increment} className='bg-green-500 text-white p-2 m-2 rounded-md'>Increment</button>
        <button onClick={decrement} className='bg-green-500 text-white p-2 m-2 rounded-md'>Decrement</button>
    </div>
    </>
  )
}
export default Counter;