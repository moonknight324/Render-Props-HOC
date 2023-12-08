import React from 'react'
import { useState } from 'react';

// Using Render Props
function Render(props) {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
      setCounter(counter + 1);
    };
  
  return (
    <div>
      {props.render(counter, handleCounter)}
    </div>
  )
}

export default Render
