//TODO: Select the form element
let formEl = document.querySelector('form');

//TODO: Function to handle form submission
const submission = function (event) {
  event.preventDefault();

  //TODO: Get form data
  const userNameEl = document.querySelector('#username').value;
  const titleEl = document.querySelector('#title').value;
  const contentEl = document.querySelector('#content').value;

//TODO: Function to dynamically create an alert
  const createAlert = function (message) {
    // Check if an alert already exists and remove it
    let existingAlert = document.querySelector('.alert-visible');
    if (existingAlert) {
      existingAlert.remove();
    }
  
    // Create a new alert element
    let alertEl = document.createElement('div');
    alertEl.classList.add('alert-visible');
    alertEl.textContent = message;
  
    // Insert the alert element into the DOM, just before the form
    formEl.parentNode.insertBefore(alertEl, formEl);
  };

  //TODO: Check if any fields are empty
  if (!userNameEl || !titleEl || !contentEl) {
    //call on createAlert function
    createAlert('Please complete the form');
    
    return;
  }

  //TODO: Create a user object with the form data
  const user = {
    username: userNameEl,
    title: titleEl,
    content: contentEl,
  };

  //TODO: Get existing posts from local storage or initialize an empty array
  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  //TODO: Add the new post to the posts array
  posts.push(user);

  //TODO: Save the updated posts array to local storage
  localStorage.setItem('posts', JSON.stringify(posts));

  //TODO: Redirect to the blog page
  redirectPage('blog.html');
};

//TODO: Function to redirect to a different page
const redirectPage = function (url) {
  location.assign(url);
};

//TODO: Add an event listener to the form for the submit event
formEl.addEventListener('submit', submission);
