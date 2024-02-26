import React from 'react'
import { useState } from 'react';

export default function About() {
  const [counter, setCounter] = useState(0);

  function onButtonClick() {
    setCounter(counter + 10);
  }
  return (
  <div>
    <div>Counter: {counter}</div>
    <button onClick={onButtonClick}>Add 10</button>
  </div>
  );
}
