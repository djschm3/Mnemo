// dates/dates.js

let dates = [];

// Function to add a new date
function addDate() {
  const dateInput = document.getElementById('date-input').value;
  const dateCategory = document.getElementById('date-category').value;

  if (dateInput) {
    const newDate = {
      id: generateId(),
      date: dateInput,
      category: dateCategory,
      recurring: false, // You can implement this later if you want recurring dates
    };

    dates.push(newDate);
    renderDates(); // Render the updated dates list
  }
}

// Function to render the dates
function renderDates() {
  const upcomingDatesDiv = document.getElementById('upcoming-dates');
  upcomingDatesDiv.innerHTML = '';

  dates.forEach(date => {
    const dateItem = document.createElement('div');
    dateItem.className = 'task-item';
    dateItem.innerHTML = `
      <span>${formatDate(date.date)} - ${date.category}</span>
    `;

    upcomingDatesDiv.appendChild(dateItem);
  });
}

// Function to format the date (if needed)
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

// Generate unique ID for each date
function generateId() {
  return 'id-' + Math.random().toString(36).substr(2, 16);
}

// Event listener for the "Add Date" button
document.getElementById('add-date-btn').addEventListener('click', addDate);
