import React, { useState } from 'react'

const CallbackUpdater = () => {
    let [count,setCount] = useState(0);

    let incCount =()=>{
        setCount((prevCount)=>{
            return (prevCount+1);
        });
        setCount((prevCount)=>{
            return prevCount+1;
        })
    }
  return (
    <div>
        <h4>Counter</h4>
        <p>Count: {count}</p>
        {/* {console.log(count)} */}
        <button onClick={incCount}>Increase Count</button>
    </div>
  )
}

export default CallbackUpdater