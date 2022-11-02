import React from 'react'
import "./ClickCounter.css";

function ClickCounter(props) {
    let [count, setCount] = React.useState(1)
  
  function handleSuma(){
    if (count <props.stock)
    setCount(count+1);
  }

  function handleResta(){
    if (count > 1)
    setCount(count-1);
  }
    return (
    <div>
        <button onClick={handleSuma}>+</button>
        <span>{count}</span>
        <button onClick={handleResta}>-</button>
        <br/>
        <button style={{ backgroundColor: props.color}}>
          {props.title}
          </button>
    </div>
  )
}

export default ClickCounter