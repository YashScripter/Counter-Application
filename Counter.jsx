import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count,setCount] = useState(0);
  const incHandle = () => {
    setCount(count+1);
  }
  const resetHandle = () => {
    setCount(0);
  }
  const decHandle = () => {
    setCount(count-1);
  }
  return (
    <>
      <div className="main">
        <h1>Counter React App</h1>
        <h2>{count}</h2>
      </div>
      <div className="section">
        <button onClick={incHandle} className="btn">+</button>
        <button onClick={resetHandle} className="btn-reset">Reset</button>
        <button onClick={decHandle} className="btn">-</button>
      </div>
    </>
  );
};

export default Counter;
