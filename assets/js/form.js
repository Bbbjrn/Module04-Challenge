// TODO: Create a variable that selects the form element
formEl = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

let redirectURL = '';

const submission = function (event) {
  event.preventDefault();
  const userNameEl = document.querySelector('#username').value;
  const titleEl = document.querySelector('#title').value;
  const contentEl = document.querySelector('#content').value;

  if (!userNameEl || !titleEl || !contentEl) {
    alert('Please buy me some chicken');
    return;
  }

  localStorage.setItem('name', userNameEl);
  localStorage.setItem('email', titleEl);
  localStorage.setItem('message', contentEl);

  redirectPage('blog.html');
};

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
}; 

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', submission);

