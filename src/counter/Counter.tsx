import { useState } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count] = useState(initialCount);

  return (
    <div>
      <h1 data-testid="count-value">Count: {count}</h1>
    </div>
  );
};

export default Counter;
