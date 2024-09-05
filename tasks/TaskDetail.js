// TaskDetail.js

function TaskDetail({ task, saveTask }) {
  const modal = document.getElementById('addTaskModal');
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Edit Task</h3>
      <label>Title: </label>
      <input type="text" id="edit-task-title" value="${task.title}">
      
      <label>Assign a Category: </label>
      <div id="category-select">
        <button style="background-color: red;" data-category="home">Home</button>
        <button style="background-color: blue;" data-category="work">Work</button>
        <button style="background-color: green;" data-category="personal">Personal</button>
        <button style="background-color: purple;" data-category="health">Health</button>
      </div>
      
      <label>Select a Due Date: </label>
      <button onclick="setDueDate('today')">Today</button>
      <button onclick="setDueDate('tomorrow')">Tomorrow</button>
      <button onclick="setDueDate('weekend')">This Weekend</button>
      <input type="date" id="edit-task-dueDate" value="${task.dueDate}">
      
      <label>Notes:</label>
      <textarea id="edit-task-notes">${task.notes || ''}</textarea>
      
      <button onclick="saveTaskDetail('${task.id}')">Save</button>
      <button onclick="closeTaskModal()">Close</button>
      <button onclick="deleteTask('${task.id}')">Delete</button>
    </div>
  `;
  modal.style.display = 'block';

  // Add category selection logic here
}

export default TaskDetail;
