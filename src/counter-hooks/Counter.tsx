import useCounter from "./useCounter";

const Counter = ({ initialCount = 0, maxCount = 10 }) => {
  const { count, increment, decrement, reset } = useCounter(
    initialCount,
    maxCount,
  );

  return (
    <div>
      <h1 data-testid="count-value">Count: {count}</h1>
      <button onClick={increment} disabled={count === maxCount}>
        Increment
      </button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
