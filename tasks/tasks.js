// tasks.js

import QuickAdd from './QuickAdd.js';
import TaskList from './TaskList.js';
import TaskDetail from './TaskDetail.js';
import AddTaskModal from './AddTaskModal.js';
import AddCategoryModal from './AddCategoryModal.js';

// Initialize tasks and categories
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let categories = JSON.parse(localStorage.getItem('categories')) || [{ name: 'All', color: '#d3d3d3' }];

// Function to save tasks to LocalStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to save categories to LocalStorage
function saveCategories() {
  localStorage.setItem('categories', JSON.stringify(categories));
}

// Function to add a new task
function addTask(task) {
  tasks.push(task);
  saveTasks();
  renderTasks();
}

// Function to add a new category
function addCategory(category) {
  categories.push(category);
  saveCategories();
  renderCategories();
}

// Function to render the task list
function renderTasks() {
  TaskList({ tasks, toggleComplete, openTaskDetail });
}

// Function to render categories
function renderCategories() {
  const categorySelect = document.getElementById('category-select');
  if (categorySelect) {
    categorySelect.innerHTML = categories.map(category => `
      <button style="background-color: ${category.color};" data-category="${category.name}">${category.name}</button>
    `).join('');
  }
}

// Function to open task detail for editing
function openTaskDetail(taskId) {
  const task = tasks.find(t => t.id === taskId);
  TaskDetail({ task, saveTask });
}

// Function to save task after editing
function saveTask(updatedTask) {
  tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
  saveTasks();
  renderTasks();
}

// Function to toggle task completion
function toggleComplete(taskId) {
  const task = tasks.find(t => t.id === taskId);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

// Close modal function
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Set up event listeners and initial rendering
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderTasks();

  // Quick Add Button Listener
  const quickAddBtn = document.getElementById('quick-add-btn');
  quickAddBtn.addEventListener('click', () => QuickAdd({ addTask }));

  // Add Task Button Listener
  const addTaskBtn = document.getElementById('add-task-btn');
  addTaskBtn.addEventListener('click', () => AddTaskModal({ addTask }));

  // Add Category Button Listener
  const addCategoryBtn = document.getElementById('add-category-btn');
  addCategoryBtn.addEventListener('click', () => AddCategoryModal({ addCategory }));
});
