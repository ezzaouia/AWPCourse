import React, { useState } from "react";
import AddTask from "./components/AddTask";
import List from "./components/List";

function App() {
  /**
   * [
      { text: 'Learn js', done: false },
      { text: 'Clean bedroom', done: true },
      { text: 'TODO ??', done: flase },
    ]
   */
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const task = {
      //
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
      <List />
      <AddTask />
    </>
  );
}

export default App;
