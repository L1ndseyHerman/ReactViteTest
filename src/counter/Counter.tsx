import { useState } from "react";

const Counter = ({ initialCount = 0, maxCount = 10 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h1 data-testid="count-value">Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} disabled={count === maxCount}>
        Increment
      </button>
      <button
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
        disabled={count === 0}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
