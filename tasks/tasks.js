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

// Function to generate unique IDs for tasks
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to add a new task
function addTask(task) {
  tasks.push(task);
  saveTasks();
  renderTasks(); // Re-render tasks after adding a new task
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

// Function to open task detail for editing (now globally accessible)
window.openTaskDetail = function(taskId) {
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

// Close modal function (now globally accessible)
window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Sorting function to sort tasks by title or due date (added this function)
window.sortTasks = function (key) {
  tasks.sort((a, b) => {
    if (key === 'title') {
      return a.title.localeCompare(b.title);
    } else if (key === 'dueDate') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
  });
  renderTasks(); // Re-render the task list after sorting
}

// Set up event listeners and initial rendering
document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  renderCategories(); // Ensure categories are rendered

  // Initialize Quick Add functionality
  QuickAdd({ addTask });

  // Add Task Button Listener
  const addTaskBtn = document.getElementById('add-task-btn');
  addTaskBtn.addEventListener('click', () => AddTaskModal({ addTask, categories }));

  // Add Category Button Listener
  const addCategoryBtn = document.getElementById('add-category-btn');
  addCategoryBtn.addEventListener('click', () => AddCategoryModal({ addCategory }));
});
