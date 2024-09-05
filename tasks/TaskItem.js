// TaskItem.js

function TaskItem({ task, toggleComplete, openTaskDetail }) {
  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';
  taskItem.innerHTML = `
    <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleComplete('${task.id}')">
    <span onclick="openTaskDetail('${task.id}')">${task.title}</span>
    <span class="due-date">${task.dueDate || ''}</span>
  `;
  return taskItem;
}

export default TaskItem;
