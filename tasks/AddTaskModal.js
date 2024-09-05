// AddTaskModal.js

// Define generateId locally, as it's used here
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function AddTaskModal({ addTask, categories }) {
  const modal = document.getElementById('addTaskModal');
  let selectedCategory = 'uncategorized'; // Default category

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

  // Event listener to select a category
  document.querySelectorAll('#category-select button').forEach(button => {
    button.addEventListener('click', function() {
      selectedCategory = this.dataset.category;
    });
  });

  // Event listener to submit the new task
  document.getElementById('submit-new-task').addEventListener('click', () => {
    const taskTitle = document.getElementById('new-task-title').value;
    const dueDate = document.getElementById('new-task-dueDate').value;

    if (taskTitle.trim() === '') {
      alert('Task title cannot be empty.');
      return;
    }

    const newTask = {
      id: generateId(), // Now defined locally
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
