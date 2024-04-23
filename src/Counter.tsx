import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };



  return (
    <div className="counter-container">
      <h3 className="counter-label">{count}</h3>
      <button onClick={increaseCount} className="counter-button">
        Increase
      </button>
      <button onClick={resetCount} className="counter-button">
        Reset
      </button>
      <button onClick={decreaseCount} className="counter-button">
        Decrease
      </button>
    </div>
  );
}

export default Counter;
