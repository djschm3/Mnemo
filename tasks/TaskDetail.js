// TaskDetail.js

function TaskDetail({ task, saveTask }) {
  const modal = document.getElementById('addTaskModal');
  let selectedCategory = task.category; // Default to task's current category

  modal.innerHTML = `
    <div class="modal-content">
      <h3>Edit Task</h3>
      <label>Title: </label>
      <input type="text" id="edit-task-title" value="${task.title}">
      
      <label>Assign a Category: </label>
      <div id="category-select">
        ${categories.map(category => `
          <button style="background-color: ${category.color};" data-category="${category.name}" ${category.name === task.category ? 'class="selected"' : ''}>${category.name}</button>
        `).join('')}
      </div>
      
      <label>Select a Due Date: </label>
      <input type="date" id="edit-task-dueDate" value="${task.dueDate}">
      
      <label>Notes:</label>
      <textarea id="edit-task-notes">${task.notes || ''}</textarea>
      
      <button onclick="saveTaskDetail('${task.id}')">Save</button>
      <button onclick="closeModal('addTaskModal')">Close</button>
      <button onclick="deleteTask('${task.id}')">Delete</button>
    </div>
  `;

  modal.style.display = 'block';

  document.querySelectorAll('#category-select button').forEach(button => {
    button.addEventListener('click', function() {
      selectedCategory = this.dataset.category;
    });
  });

  function saveTaskDetail(taskId) {
    const updatedTask = {
      ...task, // Existing task details
      title: document.getElementById('edit-task-title').value,
      dueDate: document.getElementById('edit-task-dueDate').value,
      notes: document.getElementById('edit-task-notes').value,
      category: selectedCategory,
    };
    saveTask(updatedTask);
    closeModal('addTaskModal');
  }
}

export default TaskDetail;
