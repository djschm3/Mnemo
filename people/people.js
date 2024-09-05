// people/people.js

let people = [];

// Function to add a person
function addPerson() {
  const personName = document.getElementById('person-name').value.trim();
  const personMet = document.getElementById('person-met').value.trim();

  if (personName && personMet) {
    const newPerson = { name: personName, met: personMet };
    people.push(newPerson);
    renderPeople();
  }
}

// Function to render people
function renderPeople() {
  const peopleList = document.getElementById('people-list');
  peopleList.innerHTML = '';

  people.forEach(person => {
    const personItem = document.createElement('div');
    personItem.className = 'task-item';
    personItem.innerHTML = `<span>${person.name} (Met: ${person.met})</span>`;
    peopleList.appendChild(personItem);
  });
}

document.getElementById('add-person-btn').addEventListener('click', addPerson);
