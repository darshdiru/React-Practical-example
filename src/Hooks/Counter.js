import React, { useState } from "react";
import "../Stylings/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="wrapper">
      <p>The Counter value is: {count}</p>
      <button
        type="button"
        className="highlight"
        onClick={() => setCount(count + 3)}
      >
        Count
      </button>
    </div>
  );
}

export default Counter;
