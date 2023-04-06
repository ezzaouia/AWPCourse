import React, { useState } from "react";

export function InputText(props) {
  const [toto, setToto] = useState("");

  function onChange(event) {
    setToto(event.target.value);
  }

  return (
    <div className="card">
      <p>
        <input
          onChange={(event) => {
            onChange(event);
          }}
          type="text"
        />{" "}
        <br />
        <strong>state input</strong>: {toto}
      </p>
    </div>
  );
}
