import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count)}>
        count is {count}
      </button>
    </div>
  );
}
