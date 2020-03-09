import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [score, setScore] = useState(0); //react hook

  const increment = armadillo => armadillo + 1;
  const decrement = armadillo => armadillo - 1;

  const decrementJsx =
    score > 0 ? (
      <button onClick={() => setScore(decrement(score))}>Decrement</button>
    ) : null;

  return (
    <>
      {/* <button onClick={() => setScore(score + 1)}>Increment</button>
      <button onClick={() => setScore(score - 1)}>Decrement</button> */}
      <button onClick={() => setScore(increment(score))}>Increment</button>
      {decrementJsx}
      <button onClick={() => setScore(0)}>Reset</button>
      <p>{score}</p>
    </>
  );
};

export default Counter;
