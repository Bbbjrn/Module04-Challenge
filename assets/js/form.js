// TODO: Create a variable that selects the form element
let formEl = document.querySelector('form');
let userData = [];
let user = {
  username: '',
  title: '',
  content: '',
}


// TODO: Create a function that adds user data to the userData array
const addUserData = function(user) {
  userData.push(user);
};

// TODO: Call the addUserData function with the user object
addUserData(user);


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

let redirectURL = '';


const submission = function (event) {
  event.preventDefault();
  //query selectors for the form elements
  const userNameEl = document.querySelector('#username').value;
  const titleEl = document.querySelector('#title').value;
  const contentEl = document.querySelector('#content').value;

  //if the form elements are empty, alert the user to fill them out
  if (!userNameEl || !titleEl || !contentEl) {
    alert('Please complete the form');
    return;
  }
  //create a user object with the form data
  const user = {
    username: userNameEl,
    title: titleEl,
    content: contentEl,
  };
  //add the user object to the userData array as a JSON string

  userData.push(JSON.stringify(user));
  //redirect to the blog page
  redirectPage('blog.html');
};

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
}; 

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', submission);

// Retrieve user object from local storage
const storedUser = JSON.parse(localStorage.getItem('username'));

// Fill username section with stored username
const usernameInput = document.querySelector('#username');
usernameInput.value = storedUser.username;