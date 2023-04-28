
document.addEventListener('DOMContentLoaded', () => {
  // In js 'this' keyword refers the object where it is called 
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const categorySelect = document.querySelector('#category');
  const readingList = document.querySelector('#reading-list');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const category = categorySelect.value;

    const newListItem = document.createElement('li');
    newListItem.innerHTML = `<strong class="title">${title}</strong> <span class="author">by ${author}</span> <span class="category"><strong>Category:</strong> ${category}</span>`;

    readingList.appendChild(newListItem);

    form.reset();
  });

  const deleteAllButton = document.querySelector('#delete-all-button')
  deleteAllButton.addEventListener('click', () => {
    readingList.innerHTML = '';
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('JavaScript loaded');

//   // -------title--------- 

//   const titleInput = document.querySelector('#title')

//   const handleTitleInput = function(event) {
//     const list = document.querySelector('#reading-list'); 
//     const li = document.createElement('li');
//     li.textContent = event.target.value;
//     list.appendChild(li); 
//   }
//   titleInput.addEventListener('input', handleTitleInput);

//   // -------author--------- 

//   const authorInput = document.querySelector('#author')

//   const handleAuthorInput = function(event) {
//     const list = document.querySelector('#reading-list'); 
//     const li = document.createElement('li');
//     li.textContent = event.target.value;
//     list.appendChild(li);  
//   };
//   authorInput.addEventListener('input', handleAuthorInput)

//   // -------category--------- 

//   const select = document.querySelector('#category')

//   const handleSelectChange = function(event) {
//     event.preventDefault();
//     const list = document.querySelector('#reading-list')
//     const li =document.createElement('li');
//     li.textContent = event.target.value;
//     list.appendChild(li);
//   }
//   select.addEventListener('change', handleSelectChange)

//   // -------submit--------- 

//   const form = document.querySelector('#form')

//   const handleFormSubmit = function(event) {
//     event.preventDefault();
//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;
//     const category = document.querySelector('#category').value;

//     const li = document.createElement('li');
//     li.innerHTML = `<strong>${title}</strong> by ${author} (${category})`;
//     list.appendChild(li);

//     form.reset();
//   }
//   form.addEventListener('submit', handleFormSubmit)
// })