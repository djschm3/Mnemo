// scripts.js

// Task handling
function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  if (taskInput.value.trim() !== '') {
    const taskItem = document.createElement('div');
    taskItem.innerText = taskInput.value;
    taskList.appendChild(taskItem);
    taskInput.value = ''; // Clear input field
  }
}
