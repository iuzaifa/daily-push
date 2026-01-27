import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Conter : {count}</h1>
      <button onClick={handleCount}>Count + 1</button>
      <button onClick={() => setCount(count + 2)}>Count + 2</button>
    </>
  );
};

export default Counter;
