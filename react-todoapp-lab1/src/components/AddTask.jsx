import React, { useState } from "react";

function AddTask(props) {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Ajouter un todo"
        size="100"
        onChange={(event) => {
          //
        }}
      />
      <button onClick={() => props.addTask(input)}>Add Task</button>
    </>
  );
}

export default AddTask;
