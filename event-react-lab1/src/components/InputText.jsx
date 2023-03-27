import React, { useState } from "react";

export function InputText(props) {
  const [input, setInput] = useState("");

  return (
    <div className="card">
      <p>
        <input onChange={(event) => setInput("string")} type="text" /> <br />
        <strong>state input</strong>: {input}
      </p>
    </div>
  );
}
