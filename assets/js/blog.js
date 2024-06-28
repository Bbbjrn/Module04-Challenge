// TODO: Create a variable that selects the main element
let mainEl = document.querySelector('main');

// TODO: Create a function that builds an element and appends it to the DOM
const buildElement = function (element, text, className) {
  let el = document.createElement(element);
  el.textContent = text;
  el.className = className;
  mainEl.appendChild(el);
};

// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
  buildElement('h3', 'No blog posts to display', 'text-center text-light');
};

// TODO: Create a function that reads from local storage and returns the data
const getPosts = function () {
  return JSON.parse(localStorage.getItem('posts')) || [];
};

// TODO: Call the function to render the list of blog posts
const renderPosts = function () {
  let posts = getPosts();
  if (!posts.length) {
    noPosts();
  } else {
    posts.forEach((post) => {
      buildElement('h2', post.title, 'text-light');
      buildElement('h4', post.username, 'text-light');
      buildElement('p', post.content, 'text-light');
    });
  }
};

//TODO: Write a query selector and event listener for back button and redirect to index.html
let backButton = document.querySelector('#back');
backButton.addEventListener('click', () => {
  location.assign('index.html');
});
