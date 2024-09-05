// AddTaskModal.js

function AddTaskModal({ addTask }) {
  const modal = document.getElementById('addTaskModal');
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Add New Task</h3>
      <input type="text" id="new-task-title" placeholder="Task Title" required>
      
      <label>Assign a Category: </label>
      <div id="category-select">
        ${categories.map(category => `
          <button style="background-color: ${category.color};" data-category="${category.name}">${category.name}</button>
        `).join('')}
      </div>
      
      <label>Select a Due Date: </label>
      <input type="date" id="new-task-dueDate">
      
      <button id="submit-new-task">Add Task</button>
      <button onclick="closeModal('addTaskModal')">Cancel</button>
    </div>
  `;
  modal.style.display = 'block';

  document.getElementById('submit-new-task').addEventListener('click', () => {
    const taskTitle = document.getElementById('new-task-title').value;
    const dueDate = document.getElementById('new-task-dueDate').value;

    if (taskTitle.trim() === '') {
      alert('Task title cannot be empty.');
      return;
    }

    const newTask = {
      id: generateId(),
      title: taskTitle,
      category: selectedCategory,
      dueDate: dueDate || '',
      completed: false,
      createdAt: new Date().toISOString(),
    };
    
    addTask(newTask);
    closeModal('addTaskModal');
  });
}

export default AddTaskModal;
