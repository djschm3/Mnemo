// ideas/ideas.js

let ideas = [];

// Function to add a new idea
function addIdea() {
  const ideaTitle = document.getElementById('idea-title').value.trim();
  const ideaDescription = document.getElementById('idea-description').value.trim();

  if (ideaTitle && ideaDescription) {
    const newIdea = {
      id: generateId(),
      title: ideaTitle,
      description: ideaDescription,
    };

    ideas.push(newIdea);
    renderIdeas(); // Render the updated list of ideas
  }
}

// Function to render ideas
function renderIdeas() {
  const ideasListDiv = document.getElementById('ideas-list');
  ideasListDiv.innerHTML = '';

  ideas.forEach(idea => {
    const ideaItem = document.createElement('div');
    ideaItem.className = 'task-item';
    ideaItem.innerHTML = `
      <h3>${idea.title}</h3>
      <p>${idea.description}</p>
    `;

    ideasListDiv.appendChild(ideaItem);
  });
}

// Generate unique ID for each idea
function generateId() {
  return 'id-' + Math.random().toString(36).substr(2, 16);
}

// Event listener for the "Add Idea" button
document.getElementById('add-idea-btn').addEventListener('click', addIdea);
