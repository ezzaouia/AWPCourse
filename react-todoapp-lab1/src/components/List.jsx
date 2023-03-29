import React from "react";
import Task from "./Task";

export default function List(props) {
  const items = props.todoList.map((element, index) => (
    <li key={index}>
      <Task />
    </li>
  ));

  return (
    <>
      <h3>The list</h3>
      <ol>{items}</ol>
    </>
  );
}
