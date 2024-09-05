// TaskList.js

import TaskItem from './TaskItem.js';

function TaskList({ tasks, toggleComplete, openTaskDetail }) {
  const activeTasksDiv = document.getElementById('active-tasks');
  const completedTasksDiv = document.getElementById('completed-tasks');
  
  activeTasksDiv.innerHTML = '';
  completedTasksDiv.innerHTML = '';

  tasks.forEach(task => {
    const taskItem = TaskItem({ task, toggleComplete, openTaskDetail });
    if (task.completed) {
      completedTasksDiv.appendChild(taskItem);
    } else {
      activeTasksDiv.appendChild(taskItem);
    }
  });
}

export default TaskList;
