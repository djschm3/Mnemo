// QuickAdd.js

function QuickAdd({ addTask }) {
  const quickAddDiv = document.getElementById('quick-add');
  quickAddDiv.innerHTML = `
    <input type="text" id="quick-task-input" placeholder="Add a new task...">
    <button id="submit-quick-task">Add</button>
  `;

  document.getElementById('submit-quick-task').addEventListener('click', submitQuickTask);

  function submitQuickTask() {
    const taskInput = document.getElementById('quick-task-input');
    if (taskInput.value.trim()) {
      const newTask = {
        id: generateId(),
        title: taskInput.value,
        category: 'uncategorized',
        completed: false,
        dueDate: '',
        createdAt: new Date().toISOString(),
      };
      addTask(newTask);
      taskInput.value = ''; // Clear input field after adding the task
    } else {
      alert('Task cannot be empty.');
    }
  }
}

export default QuickAdd;
