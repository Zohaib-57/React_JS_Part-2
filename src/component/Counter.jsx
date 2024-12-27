import React from 'react'
import {useState} from 'react';

const Counter = () => {
    //managing state using hooks
    let [count, setCount] = useState(0);
    let incCount = () => {
       setCount(count++);
        }
        let decCount = () => {
            setCount(count--);
             }

             //manage state using function
    // let count =0;
    // function increment(){
    //     count++;
    //     console.log(count);   
    // }
    // function decrement(){
    //     count--;
    //     console.log(count);   
    // }
  return (
    <div>
        {/*counter component */}
        <h2>Count: {count}</h2>
        <button onClick={incCount}>Increase</button>
        <button onClick={decCount}>Decrease</button>

    </div>
  )
}

export default Counter;