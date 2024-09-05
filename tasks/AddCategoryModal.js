// AddCategoryModal.js

function AddCategoryModal({ addCategory }) {
  const modal = document.getElementById('addCategoryModal');
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Add Category</h3>
      <input type="text" id="category-name" placeholder="Category Name">
      <button id="submit-new-category">Add</button>
      <button onclick="closeModal('addCategoryModal')">Cancel</button>
    </div>
  `;
  modal.style.display = 'block';

  document.getElementById('submit-new-category').addEventListener('click', () => {
    const categoryName = document.getElementById('category-name').value;
    if (categoryName.trim()) {
      addCategory({ name: categoryName, color: '#d3d3d3' });
      closeModal('addCategoryModal');
    } else {
      alert('Category name cannot be empty.');
    }
  });
}

export default AddCategoryModal;
