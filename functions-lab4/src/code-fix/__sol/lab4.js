// TODO: Fix the errors in the functions below!

function addTask(taskList, newTask) {
  taskList.push(newTask);
  return taskList;
}

function deleteTask(taskList, index) {
  taskList.splice(index, 1);
  return taskList;
}

function editTask(taskList, index, editedTask) {
  taskList.splice(index, 1, editedTask);
  return taskList;
}

function completeTask(taskList, index) {
  taskList[index].completed = true;
  return taskList;
}

function clearCompletedTasks(taskList) {
  return taskList.filter((task) => !task.completed);
}

function sortTasksByDate(taskList) {
  return taskList.sort((a, b) => a.date - b.date);
}

function filterTasksByKeyword(taskList, keyword) {
  return taskList.filter((task) =>
    task.toLowerCase().includes(keyword.toLowerCase())
  );
}

function getCompletedTasks(taskList) {
  return taskList.filter((task) => task.completed);
}

function getIncompleteTasks(taskList) {
  return taskList.filter((task) => !task.completed);
}

function getTaskCount(taskList) {
  return taskList.length;
}

function getCompletedTaskCount(taskList) {
  return taskList.filter((task) => task.completed).length;
}

function getIncompleteTaskCount(taskList) {
  return taskList.filter((task) => !task.completed).length;
}

function removeCompletedTasks(taskList) {
  return taskList.filter((task) => !task.completed);
}

function markAllTasksAsCompleted(taskList) {
  return taskList.map((task) => ({ ...task, completed: true }));
}

function markAllTasksAsIncomplete(taskList) {
  return taskList.map((task) => ({ ...task, completed: false }));
}

function addTaskToList(taskList, task) {
  return [...taskList, { task, completed: false }];
}

function deleteTaskFromList(taskList, index) {
  return [...taskList.slice(0, index), ...taskList.slice(index + 1)];
}

function editTaskInList(taskList, index, newTask) {
  return [
    ...taskList.slice(0, index),
    { task: newTask, completed: taskList[index].completed },
    ...taskList.slice(index + 1),
  ];
}

function moveTaskUp(taskList, index) {
  if (index === 0) {
    return taskList;
  }
  const newIndex = index - 1;
  return [
    ...taskList.slice(0, newIndex),
    taskList[index],
    taskList[newIndex],
    ...taskList.slice(index + 1),
  ];
}

function moveTaskDown(taskList, index) {
  if (index === taskList.length - 1) {
    return taskList;
  }
  const newIndex = index + 1;
  return [
    ...taskList.slice(0, index),
    taskList[newIndex],
    taskList[index],
    ...taskList.slice(newIndex + 1),
  ];
}

module.exports = {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  clearCompletedTasks,
  sortTasksByDate,
  filterTasksByKeyword,
  getCompletedTasks,
  getCompletedTaskCount,
  getIncompleteTaskCount,
  getTaskCount,
  getIncompleteTasks,
  removeCompletedTasks,
  markAllTasksAsCompleted,
  markAllTasksAsIncomplete,
  addTaskToList,
  editTaskInList,
  deleteTaskFromList,
  moveTaskUp,
  moveTaskDown,
};
