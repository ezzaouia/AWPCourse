import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Laval");

  function handleClick() {
    setCount(count + 1);
  }

  //
  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  return (
    <div className="card">
      <button onClick={handleClick}>count {count}</button>
    </div>
  );
}
