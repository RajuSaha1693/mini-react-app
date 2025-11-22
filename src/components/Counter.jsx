import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Interactive Counter</h2>
      <div className="counter-content">
        <p className="count-display">Count: {count}</p>
        <div className="counter-buttons">
          <button
            onClick={() => setCount(count - 1)}
            className="btn btn-danger"
          >
            Decrement
          </button>
          <button onClick={() => setCount(0)} className="btn btn-secondary">
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-success"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
