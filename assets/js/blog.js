//TODO: Select the main element
let mainEl = document.querySelector('main');
let articleEl = document.querySelector('article');
let articleH2El = document.querySelector('article h2');
let articleBqEl = document.querySelector('article blockquote');
let articlePEl = document.querySelector('article p');

//TODO: Function to build and append an element to the DOM
const buildElement = function (element, text, className) {
  let el = document.createElement(element);
  el.textContent = text;
  el.className = className;
  articleEl.appendChild(el);
};

//TODO: Function to handle the case where there are no blog posts
const noPosts = function () {
  buildElement('h3', 'No blog posts to display', 'text-center text-light');
};

//TODO: Function to read posts from local storage
const getPosts = function () {
  return JSON.parse(localStorage.getItem('posts')) || [];
};

//TODO: Function to build and append an article element for each post
const buildPost = function (post) {
    let articleSection = document.createElement('article');
    let titleEl = document.createElement('h2');
    let contentEl = document.createElement('blockquote');
    let authorEl = document.createElement('p');

    titleEl.textContent = post.title;
    contentEl.textContent = post.content;
    authorEl.textContent = "Created by: " + post.username;

    articleSection.appendChild(titleEl);
    articleSection.appendChild(contentEl);
    articleSection.appendChild(authorEl);

    mainEl.appendChild(articleSection);
};

//TODO: Function to render the list of blog posts
const renderPosts = function () {
    let posts = getPosts();
    if (!posts.length) {
        noPosts();
    } else {
        posts.forEach((post) => {
            buildPost(post);
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
