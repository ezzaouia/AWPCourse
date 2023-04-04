import React, { useState } from "react";
import AddTask from "./components/AddTask";
import List from "./components/List";

function App() {
  /**
   * [
      { text: 'Learn js', done: false },
      { text: 'Clean bedroom', done: true },
      { text: 'TODO ??', done: false },
    ]
   */
  const [tasks, setTasks] = useState([
    { text: "Learn js", done: false },
    { text: "Clean bedroom", done: true },
    { text: "TODO ??", done: false },
  ]);

  function addTask(text) {
    const task = {
      text: text,
      done: false,
    };
    setTasks([...tasks, task]);
  }

  // changer le status du todo
  function changeDone(index) {
    const newTasks = [...tasks]; // copie du tableau
    newTasks[index] = { ...newTasks[index], done: !newTasks[index].done };
    setTasks(newTasks);
  }

  return (
    <>
      <h1>Todo List App</h1>
      <List todoList={tasks} changeDone={changeDone} />
      <AddTask addTask={addTask} />
    </>
  );
}

export default App;
