// Select the form element
let formEl = document.querySelector('form');

// Function to handle form submission
const submission = function (event) {
  event.preventDefault();

  // Get form data
  const userNameEl = document.querySelector('#username').value;
  const titleEl = document.querySelector('#title').value;
  const contentEl = document.querySelector('#content').value;

  // Check if any fields are empty
  if (!userNameEl || !titleEl || !contentEl) {
    alert('Please complete the form');
    return;
  }

  // Create a user object with the form data
  const user = {
    username: userNameEl,
    title: titleEl,
    content: contentEl,
  };

  // Get existing posts from local storage or initialize an empty array
  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  // Add the new post to the posts array
  posts.push(user);

  // Save the updated posts array to local storage
  localStorage.setItem('posts', JSON.stringify(posts));

  // Redirect to the blog page
  redirectPage('blog.html');
};

// Function to redirect to a different page
const redirectPage = function (url) {
  location.assign(url);
};

// Add an event listener to the form for the submit event
formEl.addEventListener('submit', submission);
