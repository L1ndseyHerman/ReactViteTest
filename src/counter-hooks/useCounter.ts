import { useState } from "react";

const useCounter = (initialCount = 0, maxCount = 10) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count === maxCount ? count : count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
