//TODO: Select the main element
let mainEl = document.querySelector('main');

//TODO: Function to build and append an element to the DOM
const buildElement = function (element, text, className) {
  let el = document.createElement(element);
  el.textContent = text;
  el.className = className;
  mainEl.appendChild(el);
};

//TODO: Function to handle the case where there are no blog posts
const noPosts = function () {
  buildElement('h3', 'No blog posts to display', 'text-center text-light');
};

//TODO: Function to read posts from local storage
const getPosts = function () {
  return JSON.parse(localStorage.getItem('posts')) || [];
};

//TODO: Function to render the list of blog posts
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

//TODO: Call the function to render posts when the page loads
renderPosts();

//TODO: Add an event listener to the back button
let backButton = document.querySelector('#back');
backButton.addEventListener('click', () => {
  location.assign('index.html');
});
